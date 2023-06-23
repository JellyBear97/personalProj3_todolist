import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
`;

function Layout({ children }) {
  return (
    <StLayout>
      <Header />
      {children}
      <Footer />
    </StLayout>
  );
}

export default Layout;
