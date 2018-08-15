import React from 'react';
import PropTypes from 'prop-types';

const ArticlesView = ({ articles }) => (
  <div>{articles.map(article => JSON.stringify(article, null, 2))}</div>
);

export default ArticlesView;

ArticlesView.propTypes = {
  articles: PropTypes.arr,
};
