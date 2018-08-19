import React from 'react';
import PropTypes from 'prop-types';

import httpStatusCodes from './httpStatusCodes';

const ErrorPage = ({ match }) => {
  const errorCode = match.params.code || 404;
  const errorMessage = httpStatusCodes[errorCode];

  return (
    <div className="error-page">
      <div className="error-code">{errorCode}</div>
      <div className="error-message">{errorMessage}</div>
    </div>
  );
};

export default ErrorPage;

ErrorPage.defaultProps = {
  match: {
    params: {
      code: 404,
    },
  },
};

ErrorPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      code: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  }),
};
