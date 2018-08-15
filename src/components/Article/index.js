import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article, handleOnClick }) => (
  <div className="article" onClick={() => handleOnClick({ articleId: article.id })}>
    <div className="article--header">{article.title}</div>
    <div className="article--body">{article.excerpt}</div>
    <div className="article--footer">{article.author}</div>
  </div>
);

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    excerpt: PropTypes.string,
  }).isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Article;
