import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article, handleOnClick, deleteArticle }) => (
  <div className="article" onClick={() => handleOnClick({ articleId: article.id })}>
    <div className="article--header">{article.title}</div>
    <div className="article--body">{decodeURI(article.excerpt.trim())}</div>
    <div className="article--footer">
      <div className="btn remove-button" onClick={event => deleteArticle({ articleId: article.id })(event)}>Remove</div>
      {article.author}
    </div>
  </div>
);

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    excerpt: PropTypes.string,
  }).isRequired,
  deleteArticle: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Article;
