import { all } from 'redux-saga/effects';
import { fetchAllArticles, fetchArticleById } from './article';

export default function* rootSaga() {
  try {
    yield all([fetchAllArticles(), fetchArticleById()]);
  } catch (e) {
    console.log(e);
  }
}
