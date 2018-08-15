import React from 'react';
import PropTypes from 'prop-types';

const ArticleDetails = ({ article }) => (
  <div className="article-details">
    <div className="article-details--header">
      <span className="title">{article.title}</span>
      <span className="author">{article.author}</span>
    </div>
    <div className="article-details--body">{article.content}</div>
    <div className="article-details--footer">
      {article.published}
      {article.tags &&
        article.tags.map(tag => (
          <span key={tag} className="tag">
            <div className="tag--times">&times;</div>
            {tag}
          </span>
        ))}
    </div>
  </div>
);

export default ArticleDetails;

ArticleDetails.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    published: PropTypes.bool,
    tags: PropTypes.array,
  }),
};
