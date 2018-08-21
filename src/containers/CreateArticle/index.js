import { connect } from 'react-redux';
import { createArticle } from 'store/actions/article';
import ArticleDetails from 'components/ArticleDetails';

const mapDispatchToProps = (dispatch) => ({
  saveChanges: ({ article }) => dispatch(createArticle({ article })),
});

export default connect(null, mapDispatchToProps)(ArticleDetails);
