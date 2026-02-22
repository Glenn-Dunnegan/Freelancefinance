import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 p-4 text-center">
      <p className="text-gray-600">
        &copy; {currentYear} <a href="https://Freelance-finance.com" className="hover:underline">Freelance Finance </a>. All rights reserved.
      </p>
    </footer>
  );
};

