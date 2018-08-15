import React from 'react';
import styled from 'styled-components';

export default function() {
  return <HeaderContainer />;
}

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #123456;
`;
