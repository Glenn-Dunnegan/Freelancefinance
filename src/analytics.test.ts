import { describe, expect, it, vi, afterEach } from 'vitest';
import { trackEvent } from './analytics';

describe('trackEvent', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('does nothing when gtag is unavailable', () => {
    vi.stubGlobal('window', {});

    expect(() => trackEvent('event_without_gtag')).not.toThrow();
  });

  it('sends event with filtered params when gtag exists', () => {
    const gtag = vi.fn();
    vi.stubGlobal('window', { gtag });

    trackEvent('invoice_generated', {
      total: 385,
      has_logo: false,
      optional_value: undefined,
      null_value: null,
    });

    expect(gtag).toHaveBeenCalledWith('event', 'invoice_generated', {
      total: 385,
      has_logo: false,
    });
  });
});
