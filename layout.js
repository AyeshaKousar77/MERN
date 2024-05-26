import React from 'react';
import Header from './header';
import Footer from './footer';
import './layout.css';

function Layout({ isAuthenticated, handleLogout, children }) {
  return (
    <>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <main>{children}</main>
      <Footer />
   </>
  );
}

export default Layout;
