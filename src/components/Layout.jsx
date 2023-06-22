import React from 'react';
import Header from './Header';
import Footer from './Footer';

const layoutStyles = {
  maxWidth: '1200px',
  minWidth: '800px',
  margin: 'auto',
};

function Layout({ children }) {
  return (
    <div style={layoutStyles}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
