import { Link, useLocation } from 'react-router-dom';
import { Calculator, FileText } from 'lucide-react';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
              <span>Invoice Generator</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
