import { fileURLToPath } from 'node:url';

export function getBaseUrl() {
  return (process.env.SITE_URL || 'https://freelance-finance.com').replace(/\/$/, '');
}

const defaultHeaders = {
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
};

export const crawlerUserAgents = [
  'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
  'AdsBot-Google (+http://www.google.com/adsbot.html)',
];

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

function shouldRetryStatus(status) {
  return [429, 500, 502, 503, 504].includes(status);
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function fetchWithCheck(
  url,
  {
    fetchImpl = fetch,
    userAgent = crawlerUserAgents[0],
    maxAttempts = 3,
    retryDelayMs = 1200,
  } = {}
) {
  let lastResponse;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await fetchImpl(url, {
        headers: {
          ...defaultHeaders,
          'user-agent': userAgent,
        },
        redirect: 'follow',
      });

      lastResponse = response;

      if (!shouldRetryStatus(response.status) || attempt === maxAttempts) {
        const contentType = response.headers.get('content-type') || '';

        return {
          response,
          contentType,
          finalUrl: response.url,
        };
      }
    } catch (error) {
      if (attempt === maxAttempts) {
        throw error;
      }
    }

    await delay(retryDelayMs * attempt);
  }

  if (!lastResponse) {
    throw new Error(`No response received from ${url} after ${maxAttempts} attempts`);
  }

  const fallbackContentType = lastResponse.headers.get('content-type') || '';

  return {
    response: lastResponse,
    contentType: fallbackContentType,
    finalUrl: lastResponse.url || url,
  };
}

export async function verifyEndpoint(
  { path, expectedType },
  {
    baseUrl = getBaseUrl(),
    fetchImpl = fetch,
    logger = console.log,
    userAgent = crawlerUserAgents[0],
  } = {}
) {
  const url = `${baseUrl}${path}`;
  const { response, contentType, finalUrl } = await fetchWithCheck(url, {
    fetchImpl,
    userAgent,
  });

  assert(response.ok, `${path} returned ${response.status}`);
  assert(contentType.toLowerCase().includes(expectedType), `${path} returned unexpected content type: ${contentType || 'missing'}`);

  logger(`OK   ${path} -> ${response.status} ${finalUrl} [UA: ${userAgent}]`);

   return response;
}

export async function verifyAssets(
  html,
  {
    baseUrl = getBaseUrl(),
    fetchImpl = fetch,
    logger = console.log,
    userAgent = crawlerUserAgents[0],
  } = {}
) {
  const assetMatches = [...html.matchAll(/\/assets\/[^"']+\.(?:js|css)/g)].map((match) => match[0]);
  const assetPaths = [...new Set(assetMatches)];

  assert(assetPaths.length > 0, 'No built assets found in homepage HTML');

  for (const assetPath of assetPaths) {
    const assetUrl = `${baseUrl}${assetPath}`;
    const assetResponse = await fetchImpl(assetUrl, {
      method: 'HEAD',
      headers: {
        ...defaultHeaders,
        'user-agent': userAgent,
      },
      redirect: 'follow',
    });

    assert(assetResponse.ok, `${assetPath} returned ${assetResponse.status}`);
    logger(`OK   ${assetPath} -> ${assetResponse.status} [UA: ${userAgent}]`);
  }
}

export async function main({
  baseUrl = getBaseUrl(),
  fetchImpl = fetch,
  logger = console.log,
  userAgents = crawlerUserAgents,
} = {}) {
  logger(`Checking ${baseUrl} as a crawler-visible production site...`);

  for (const userAgent of userAgents) {
    logger(`Running checks as ${userAgent}...`);

    let homepageResponse;

    for (const endpointCheck of endpointChecks) {
      const response = await verifyEndpoint(endpointCheck, {
        baseUrl,
        fetchImpl,
        logger,
        userAgent,
      });

      if (endpointCheck.path === '/') {
        homepageResponse = response;
      }
    }

    assert(homepageResponse, 'Homepage check did not return a response');

    const homepageHtml = await homepageResponse.text();

    await verifyAssets(homepageHtml, {
      baseUrl,
      fetchImpl,
      logger,
      userAgent,
    });
  }

  logger('Production site checks passed.');
}

const isDirectExecution = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isDirectExecution) {
  main().catch((error) => {
    console.error(`Production site checks failed: ${error.message}`);
    process.exitCode = 1;
  });
}