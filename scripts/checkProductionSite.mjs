const baseUrl = (process.env.SITE_URL || 'https://freelance-finance.com').replace(/\/$/, '');

const defaultHeaders = {
  'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
};

const endpointChecks = [
  { path: '/', expectedType: 'text/html' },
  { path: '/guide/tax-guide', expectedType: 'text/html' },
  { path: '/robots.txt', expectedType: 'text/plain' },
  { path: '/sitemap.xml', expectedType: 'xml' },
  { path: '/ads.txt', expectedType: 'text/plain' },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function fetchWithCheck(url) {
  const response = await fetch(url, {
    headers: defaultHeaders,
    redirect: 'follow',
  });

  const contentType = response.headers.get('content-type') || '';

  return {
    response,
    contentType,
    finalUrl: response.url,
  };
}

async function verifyEndpoint({ path, expectedType }) {
  const url = `${baseUrl}${path}`;
  const { response, contentType, finalUrl } = await fetchWithCheck(url);

  assert(response.ok, `${path} returned ${response.status}`);
  assert(contentType.toLowerCase().includes(expectedType), `${path} returned unexpected content type: ${contentType || 'missing'}`);

  console.log(`OK   ${path} -> ${response.status} ${finalUrl}`);

   return response;
}

async function verifyAssets(html) {
  const assetMatches = [...html.matchAll(/\/assets\/[^"']+\.(?:js|css)/g)].map((match) => match[0]);
  const assetPaths = [...new Set(assetMatches)];

  assert(assetPaths.length > 0, 'No built assets found in homepage HTML');

  for (const assetPath of assetPaths) {
    const assetUrl = `${baseUrl}${assetPath}`;
    const assetResponse = await fetch(assetUrl, {
      method: 'HEAD',
      headers: defaultHeaders,
      redirect: 'follow',
    });

    assert(assetResponse.ok, `${assetPath} returned ${assetResponse.status}`);
    console.log(`OK   ${assetPath} -> ${assetResponse.status}`);
  }
}

async function main() {
  console.log(`Checking ${baseUrl} as a crawler-visible production site...`);

  let homepageResponse;

  for (const endpointCheck of endpointChecks) {
    const response = await verifyEndpoint(endpointCheck);

    if (endpointCheck.path === '/') {
      homepageResponse = response;
    }
  }

  assert(homepageResponse, 'Homepage check did not return a response');

  const homepageHtml = await homepageResponse.text();

  await verifyAssets(homepageHtml);

  console.log('Production site checks passed.');
}

main().catch((error) => {
  console.error(`Production site checks failed: ${error.message}`);
  process.exitCode = 1;
});