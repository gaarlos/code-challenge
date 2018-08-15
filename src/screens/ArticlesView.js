import React from 'react';
import PropTypes from 'prop-types';

import Article from 'components/Article';
import Loading from 'components/Loading';

const ArticlesView = ({ articles, loading }) => (
  <div className="articles-container">
    {loading ? (
      <Loading />
    ) : (
      articles.map(article => <Article key={article.id} article={article} />)
    )}
  </div>
);

export default ArticlesView;

ArticlesView.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};
