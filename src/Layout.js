import React from 'react';
import Navbar from './components/Navbar';
import Baner from './components/Baner';
import Footer from './components/Footer';
import AdvertisementList from './components/AdvertisementList';

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Baner />
        <AdvertisementList />
        <Footer />
    </div>
  );
};

export default Layout;
