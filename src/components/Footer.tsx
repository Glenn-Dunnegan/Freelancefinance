import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 p-4 text-center print:hidden">
      <p className="text-gray-600">
        &copy; {currentYear} <a href="https://Freelance-finance.com" className="hover:underline">Vertex Labs</a>. All rights reserved.
      </p>
      <div className="mt-2 flex flex-wrap justify-center text-sm text-gray-600">
        <Link to="/about" style={{ display: 'inline-block', marginLeft: '5px', marginRight: '5px' }} className="hover:text-indigo-700 hover:underline">About</Link>
        <Link to="/contact" style={{ display: 'inline-block', marginLeft: '5px', marginRight: '5px' }} className="hover:text-indigo-700 hover:underline">Contact</Link>
        <Link to="/privacy-policy" style={{ display: 'inline-block', marginLeft: '5px', marginRight: '5px' }} className="hover:text-indigo-700 hover:underline">Privacy</Link>
        <Link to="/terms" style={{ display: 'inline-block', marginLeft: '5px', marginRight: '5px' }} className="hover:text-indigo-700 hover:underline">Terms</Link>
        <Link to="/affiliate-disclosure" style={{ display: 'inline-block', marginLeft: '5px', marginRight: '5px' }} className="hover:text-indigo-700 hover:underline">Affiliate Disclosure</Link>
      </div>
    </footer>
  );
};

