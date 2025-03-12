import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 px-8 bg-gray-800 text-white text-center">
      © {new Date().getFullYear()} WhatsGrow. All rights reserved.
    </footer>
  );
};

export default Footer;
