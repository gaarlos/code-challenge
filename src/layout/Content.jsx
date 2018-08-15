import React from 'react';
import PropTypes from 'prop-types';

import Loading from 'components/Loading';

const Content = ({ children, loading }) => (
  <div className="content">{loading ? <Loading /> : children}</div>
);

export default Content;

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  loading: PropTypes.bool,
};
