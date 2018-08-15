import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Header = ({ history }) => (
  <header className="header">
    <img src="/assets/images/billin-logo.png" alt="Billin" onClick={() => history.push('/')} />
    <span>Code Challenge</span>
  </header>
);

export default withRouter(Header);

Header.propTypes = {
  history: PropTypes.object,
};
