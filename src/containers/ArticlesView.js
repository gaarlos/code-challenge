import { connect } from 'react-redux';
import WithDidMountAction from 'components/WithDidMountAction';
import ArticlesView from 'screens/ArticlesView';
import { getAllArticles } from 'store/actions/article';

const mapStateToProps = ({ article }) => ({
  articles: article.articles || [],
});

const mapDispatchToProps = dispatch => ({
  handleDidMountAction: () => dispatch(getAllArticles()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WithDidMountAction(ArticlesView));
