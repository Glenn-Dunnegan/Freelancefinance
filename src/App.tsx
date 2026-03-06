import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FreelanceCalculator } from './components/FreelanceCalculator';
import { InvoiceGenerator } from './components/InvoiceGenerator';
import { FreelancingGuide2026 } from './components/FreelancingGuide2026';
import { HiddenCosts } from './components/HiddenCosts';
import { NegotiatingRates } from './components/NegotiatingRates';
import { FreelancerTaxGuide } from './components/FreelancerTaxGuide';
import { Navigation } from './components/Navigation';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { AffiliateDisclosure } from './components/AffiliateDisclosure';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="print:hidden">
          <Navigation />
        </div>
        <div className="py-12 px-4 print:p-0">
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
        </div>
      </div>
    </Router>
  );
}