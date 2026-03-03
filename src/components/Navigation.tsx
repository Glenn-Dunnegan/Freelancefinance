import { Link, useLocation } from 'react-router-dom';
import { Calculator, FileText, BookOpen, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Dropdown } from './Dropdown';

export function Navigation() {
  const location = useLocation();
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  const guideLinks = [
    { path: '/guide/freelancing-101', label: 'Freelancing 101' },
    { path: '/guide/hidden-costs', label: 'Hidden Costs' },
    { path: '/guide/negotiating-rates', label: 'Negotiating Rates' },
    { path: '/guide/tax-guide', label: 'Tax Guide' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-indigo-600" />
            <span className="text-xl text-gray-900">Freelance Tools</span>
          </div>

          <div className="flex gap-1">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/')
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Rate Calculator</span>
            </Link>
            <Link
              to="/invoice-generator"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isActive('/invoice-generator')
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Invoice</span>
            </Link>
            
            {/* Guides Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive('/guide')
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Guides</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isGuidesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isGuidesOpen && (
                <div className="dropdown">
                  {/*className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"*/}
                  {guideLinks.map(guide => (
                    <Link
                      key={guide.path}
                      to={guide.path}
                      onClick={() => setIsGuidesOpen(false)}
                      className={`block px-4 py-3 text-sm transition-colors ${
                        isActive(guide.path)
                          ? 'bg-indigo-50 text-indigo-700 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      } ${
                        guideLinks.indexOf(guide) !== guideLinks.length - 1 ? 'border-b border-gray-100' : ''
                      }`}
                    >
                      {guide.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
