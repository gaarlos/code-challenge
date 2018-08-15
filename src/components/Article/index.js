import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => (
  <div className="article">
    <div className="article--header">{article.title}</div>
    <div className="article--body">{article.excerpt}</div>
    <div className="article--footer">{article.author}</div>
  </div>
);

Article.propTypes = {
  article: PropTypes.obj,
};

export default Article;
