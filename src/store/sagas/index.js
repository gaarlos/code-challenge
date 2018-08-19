import { all } from 'redux-saga/effects';
import { fetchAllArticles, fetchArticleById, deleteArticleById } from './article';
import { history } from 'app/AppWithNavigation';

export default function* rootSaga() {
  try {
    yield all([fetchAllArticles(), fetchArticleById(), deleteArticleById()]);
  } catch (e) {
    history.replace(`/error/${404}`);
  }
}
