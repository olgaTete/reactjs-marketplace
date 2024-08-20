import React from 'react';

const Navbar = () => {
  return (
    <niv>
        <div class='logo'>
          <span style={{backgroundColor: "Red"}}>
            <a href="/">MyMarketplace</a>
            </span>
        </div>
          <div class='bar'>
              <a href="/login">Login</a>
              <a href="/signup"> Sign Up</a>
              <a href="/about"> About</a>
          </div>
      </niv>
     
  );
};

export default Navbar;
