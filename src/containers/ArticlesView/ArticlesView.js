import React from 'react';
import PropTypes from 'prop-types';

import Article from 'components/Article';

const ArticlesView = ({ articles, handleOnClick, deleteArticle }) => (
  <div className="articles-container">
    {articles.map(article => (
      <Article
        key={article.id}
        article={article}
        handleOnClick={handleOnClick}
        deleteArticle={deleteArticle}
      />
    ))}
  </div>
);

export default ArticlesView;

ArticlesView.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  deleteArticle: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};
