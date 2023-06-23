import React from 'react';
import styled from 'styled-components';

const StHeader = styled.header`
  background-color: pink;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header() {
  return (
    <StHeader>
      <h1>My todo List</h1>
    </StHeader>
  );
}

export default Header;
