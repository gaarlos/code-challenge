import { all } from 'redux-saga/effects';
import { fetchAllArticles } from './article';

export default function* rootSaga() {
  try {
    yield all([fetchAllArticles()]);
  } catch (e) {
    console.log(e);
  }
}
