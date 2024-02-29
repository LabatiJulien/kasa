import React from 'react';
import Footer from './Footer.jsx';
import CustomNavbar from './Navbar.jsx'; 

function Layout({ children }) { 
  return (
    <div>
      <CustomNavbar /> 
      <div className="content-wrapper">
        {children}
      </div>
      <Footer className="main-footer" />
    </div>
  );
}

export default Layout;
