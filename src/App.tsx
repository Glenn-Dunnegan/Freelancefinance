import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';

import { FreelanceCalculator } from './components/FreelanceCalculator';

const InvoiceGenerator = lazy(() =>
  import('./components/InvoiceGenerator').then((m) => ({ default: m.InvoiceGenerator }))
);
const FreelancingGuide2026 = lazy(() =>
  import('./components/FreelancingGuide2026').then((m) => ({ default: m.FreelancingGuide2026 }))
);
const HiddenCosts = lazy(() =>
  import('./components/HiddenCosts').then((m) => ({ default: m.HiddenCosts }))
);
const NegotiatingRates = lazy(() =>
  import('./components/NegotiatingRates').then((m) => ({ default: m.NegotiatingRates }))
);
const FreelancerTaxGuide = lazy(() =>
  import('./components/FreelancerTaxGuide').then((m) => ({ default: m.FreelancerTaxGuide }))
);
const AboutPage = lazy(() =>
  import('./components/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import('./components/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const PrivacyPolicy = lazy(() =>
  import('./components/PrivacyPolicy').then((m) => ({ default: m.PrivacyPolicy }))
);
const TermsOfService = lazy(() =>
  import('./components/TermsOfService').then((m) => ({ default: m.TermsOfService }))
);
const AffiliateDisclosure = lazy(() =>
  import('./components/AffiliateDisclosure').then((m) => ({ default: m.AffiliateDisclosure }))
);

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="w-8 h-8 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'function') {
      return;
    }

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_path: `${location.pathname}${location.search}`,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search]);

  return null;
}

export default function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="print:hidden">
          <Navigation />
        </div>
        <div className="py-12 px-4 print:p-0">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<FreelanceCalculator />} />
              <Route path="/invoice-generator" element={<InvoiceGenerator />} />
              <Route path="/guide/freelancing-101" element={<FreelancingGuide2026 />} />
              <Route path="/guide/hidden-costs" element={<HiddenCosts />} />
              <Route path="/guide/negotiating-rates" element={<NegotiatingRates />} />
              <Route path="/guide/tax-guide" element={<FreelancerTaxGuide />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}