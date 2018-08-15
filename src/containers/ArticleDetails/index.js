import { connect } from 'react-redux';
import WithDidMountAction from 'components/WithDidMountAction';
import WithLoading from 'components/WithLoading';
import { getArticleById } from 'store/actions/article';
import ArticleDetails from './ArticleDetails';

const mapStateToProps = ({ article, loading }) => ({
  article: article.article || {},
  loading,
});

const mapDispatchToProps = (dispatch, { match }) => {
  const articleId = match.params.id;

  return {
    handleDidMountAction: () => dispatch(getArticleById({ articleId })),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithDidMountAction(WithLoading(ArticleDetails)));
