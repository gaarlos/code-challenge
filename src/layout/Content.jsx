import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Content = ({ children }) => <StyledContent>{children}</StyledContent>;

export default Content;

Content.propTypes = {
  children: PropTypes.any,
};

const StyledContent = styled.div`
  min-height: 100vh;
  padding: 90px 0;
`;
