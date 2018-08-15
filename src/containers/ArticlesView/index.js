import { connect } from 'react-redux';
import {} from 'react-router-dom';
import WithDidMountAction from 'components/WithDidMountAction';
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
)(WithDidMountAction(ArticlesView));
