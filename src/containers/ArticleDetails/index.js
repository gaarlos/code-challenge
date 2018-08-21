import { connect } from 'react-redux';
import WithDidMountAction from 'components/WithDidMountAction';
import WithLoading from 'components/WithLoading';
import { getArticleById, updateArticle } from 'store/actions/article';
import ArticleDetails from 'components/ArticleDetails';

const mapStateToProps = ({ article, loading }) => {
  const { title = '', author = '', published = false, content = '', tags = [] } = article.article;

  return ({
    title,
    author,
    published,
    content,
    tags,
    loading,
  });
};

const mapDispatchToProps = (dispatch, { match }) => {
  const articleId = match.params.id;

  return {
    handleDidMountAction: () => dispatch(getArticleById({ articleId })),
    saveChanges: ({ article }) => dispatch(updateArticle({
      article: { id: articleId, ...article },
    })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithDidMountAction(WithLoading(ArticleDetails)));
