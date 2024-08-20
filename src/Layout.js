import React from 'react';
import Navbar from './components/Navbar';
import Baner from './components/Baner';
import Footer from './components/Footer';
import AdvertisementList from './components/AdvertisementList';

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <header>
        <Navbar />
        <Baner />
      </header>

      {/* Main Content */}
      <main>
        <AdvertisementList />
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
