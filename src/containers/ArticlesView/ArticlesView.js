import React from 'react';
import PropTypes from 'prop-types';

import Article from 'components/Article';
import Loading from 'components/Loading';

const ArticlesView = ({ articles, handleOnClick, loading }) =>
  loading ? (
    <Loading />
  ) : (
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
  loading: PropTypes.bool,
};
