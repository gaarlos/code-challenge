import { connect } from 'react-redux';
import WithDidMountAction from 'components/WithDidMountAction';
import WithLoading from 'components/WithLoading';
import { getAllArticles } from 'store/actions/article';
import ArticlesView from './ArticlesView';

const mapStateToProps = ({ article, loading }) => ({
  articles: article.articles || [],
  loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDidMountAction: () => dispatch(getAllArticles()),
  handleOnClick: ({ articleId }) => ownProps.history.push(`/${articleId}`),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithDidMountAction(WithLoading(ArticlesView)));
