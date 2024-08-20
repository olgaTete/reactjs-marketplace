import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <a href="/about">
            About Us
          </a>
          <a href="/contact">
            Contact
          </a>
          <a href="/privacy">
            Privacy Policy
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} MyMarketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
