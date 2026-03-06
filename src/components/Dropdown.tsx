import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface DropdownLink {
  path: string;
  label: string;
}

interface DropdownProps {
  icon: LucideIcon;
  label: string;
  links: DropdownLink[];
  activePath?: string;
}

export function Dropdown({ icon: Icon, label, links, activePath }: DropdownProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (activePath) {
      return location.pathname === path || location.pathname.startsWith(activePath);
    }
    return location.pathname === path;
  };

  const isDropdownActive = activePath 
    ? location.pathname.startsWith(activePath)
    : false;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          isDropdownActive
            ? 'bg-indigo-100 text-indigo-700'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Icon className="w-4 h-4" />
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="dropdown2">
          {links.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className='dditem'
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
