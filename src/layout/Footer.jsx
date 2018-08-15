import React from 'react';
import styled from 'styled-components';

export default function() {
  return (
    <Footer>
      <span>{new Date().getFullYear()} garlos.daw@gmail.com</span>
    </Footer>
  );
}

const Footer = styled.footer`
  position: absolute;
  height: 80px;
  background-color: #123456;
  bottom: 0;
  right: 0;
  left: 0;
`;
