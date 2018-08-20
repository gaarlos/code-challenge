import { all } from 'redux-saga/effects';
import { fetchAllArticles, fetchArticleById, deleteArticleById, updateArticleById } from './article';
import { history } from 'app/AppWithNavigation';

export default function* rootSaga() {
  try {
    yield all([fetchAllArticles(), fetchArticleById(), deleteArticleById(), updateArticleById()]);
  } catch (e) {
    history.replace(`/error/${404}`);
  }
}
