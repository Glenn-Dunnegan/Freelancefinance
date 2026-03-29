import { describe, expect, it, vi } from 'vitest';
import { fetchWithCheck, verifyAssets, verifyEndpoint } from './checkProductionSite.mjs';

describe('checkProductionSite', () => {
  it('verifies an endpoint with expected content type', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      url: 'https://example.com/',
      headers: {
        get: () => 'text/html; charset=utf-8',
      },
    });

    await expect(
      verifyEndpoint(
        { path: '/', expectedType: 'text/html' },
        { baseUrl: 'https://example.com', fetchImpl, logger: vi.fn() }
      )
    ).resolves.toBeTruthy();

    expect(fetchImpl).toHaveBeenCalledTimes(1);
  });

  it('fails endpoint verification when content type is unexpected', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      url: 'https://example.com/sitemap.xml',
      headers: {
        get: () => 'text/html; charset=utf-8',
      },
    });

    await expect(
      verifyEndpoint(
        { path: '/sitemap.xml', expectedType: 'xml' },
        { baseUrl: 'https://example.com', fetchImpl, logger: vi.fn() }
      )
    ).rejects.toThrow('returned unexpected content type');
  });

  it('retries transient status codes before succeeding', async () => {
    const fetchImpl = vi
      .fn()
      .mockResolvedValueOnce({
        ok: false,
        status: 503,
        url: 'https://example.com/',
        headers: {
          get: () => 'text/html; charset=utf-8',
        },
      })
      .mockResolvedValueOnce({
        ok: true,
        status: 200,
        url: 'https://example.com/',
        headers: {
          get: () => 'text/html; charset=utf-8',
        },
      });

    const result = await fetchWithCheck('https://example.com/', {
      fetchImpl,
      retryDelayMs: 0,
    });

    expect(fetchImpl).toHaveBeenCalledTimes(2);
    expect(result.response).toBeDefined();
    if (!result.response) {
      throw new Error('Expected fetchWithCheck to return a response');
    }
    expect(result.response.status).toBe(200);
  });

  it('verifies all discovered JS and CSS assets from html', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
    });

    const html = `
      <html>
        <head>
          <link rel="stylesheet" href="/assets/app.css" />
          <script src="/assets/main.js"></script>
        </head>
      </html>
    `;

    await verifyAssets(html, {
      baseUrl: 'https://example.com',
      fetchImpl,
      logger: vi.fn(),
    });

    expect(fetchImpl).toHaveBeenCalledTimes(2);
    expect(fetchImpl).toHaveBeenNthCalledWith(
      1,
      'https://example.com/assets/app.css',
      expect.objectContaining({ method: 'HEAD' })
    );
    expect(fetchImpl).toHaveBeenNthCalledWith(
      2,
      'https://example.com/assets/main.js',
      expect.objectContaining({ method: 'HEAD' })
    );
  });

  it('fails when no built assets are found in html', async () => {
    const fetchImpl = vi.fn();

    await expect(
      verifyAssets('<html><body>No assets</body></html>', {
        baseUrl: 'https://example.com',
        fetchImpl,
        logger: vi.fn(),
      })
    ).rejects.toThrow('No built assets found in homepage HTML');
  });
});
