import React from 'react';
import PropTypes from 'prop-types';

import Article from 'components/Article';

const ArticlesView = ({ articles, handleOnClick }) => (
  <div className="articles-container">
    {articles.map(article => (
      <Article key={article.id} article={article} handleOnClick={handleOnClick} />
    ))}
  </div>
);

export default ArticlesView;

ArticlesView.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  handleOnClick: PropTypes.func.isRequired,
};
