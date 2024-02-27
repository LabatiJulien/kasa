import React from 'react';
import Footer from './Footer.jsx';
import Banner from './banner.jsx';
import CustomNavbar from './Navbar.jsx'; 

function Layout({ children, includeBanner = true }) {
  return (
    <div>
      <CustomNavbar /> 
      {includeBanner && <Banner />}
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
