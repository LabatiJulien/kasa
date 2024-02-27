import React from 'react';
import Footer from './Footer.jsx';
import CustomNavbar from './Navbar.jsx'; 

function Layout({ children }) { 
  return (
    <div>
      <CustomNavbar /> 
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
