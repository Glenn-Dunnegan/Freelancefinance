import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FreelanceCalculator } from './components/FreelanceCalculator';
import { InvoiceGenerator } from './components/InvoiceGenerator';
import { Navigation } from './components/Navigation';

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}