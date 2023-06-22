import React from 'react';

const headerStyles = {
  backgroundColor: 'pink',
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Header() {
  return (
    <header style={headerStyles}>
      <h1>My todo List</h1>
    </header>
  );
}

export default Header;
