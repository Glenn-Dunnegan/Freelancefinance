import { Link, useLocation } from 'react-router-dom';
import { Calculator, FileText } from 'lucide-react';
import { useState } from 'react';
import { Dropdown2 } from './Dd';
import { MobileNav } from './MobileNav';

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

  const mobileNavItems = [
    { label: 'Rate Calculator', to: '/' },
    { label: 'Invoice Generator', to: '/invoice-generator' },
    ...guideLinks.map(guide => ({ label: guide.label, to: guide.path }))
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-gray-900 hover:text-indigo-700 transition-colors">
            <Calculator className="w-6 h-6 text-indigo-600" />
            <span className="text-xl text-gray-900">Freelance Tools</span>
          </Link>
          <div className="navContainerTop">
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
            <div><Dropdown2 label={'Guides'} items={guideLinks.map(guide => ({ label: guide.label, onClick: () => setIsGuidesOpen(false), path:guide.path }))} /></div>
          </div>
          </div>
          <div className='mobileNav'>
              <MobileNav items={mobileNavItems}/>
          </div>
        </div>
      </div>
    </nav>
  );
}
