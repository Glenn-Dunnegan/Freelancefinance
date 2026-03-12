type AnalyticsValue = string | number | boolean;

type AnalyticsParams = Record<string, AnalyticsValue | null | undefined>;

export function trackEvent(eventName: string, params?: AnalyticsParams) {
  if (typeof window.gtag !== 'function') {
    return;
  }

  if (!params) {
    window.gtag('event', eventName);
    return;
  }

  const cleanedParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null)
  );

  window.gtag('event', eventName, cleanedParams);
}
