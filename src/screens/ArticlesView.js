import React from 'react';
import PropTypes from 'prop-types';
import Article from 'components/Article';

const ArticlesView = ({ articles }) => (
  <div className="articles-container">
    {articles.map(article => <Article key={article.id} article={article} />)}
  </div>
);

export default ArticlesView;

ArticlesView.propTypes = {
  articles: PropTypes.arr,
};
