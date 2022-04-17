import React from 'react';

const Footer = () => {
  return (
    <footer>
      <span className="block sm:inline self-center">
        © {new Date().getFullYear()} Krio, Inc. All Right Reserved.
      </span>{' '}
    </footer>
  );
};

export default Footer;
