import { call, put, takeLatest } from 'redux-saga/effects';

import { ARTICLES_QUERY } from 'queries';
import request from 'request';

import { GET_ALL_ARTICLES, GET_ALL_ARTICLES_SUCCESS } from 'store/actions/article';

function* fetchArticles$() {
  try {
    const articles = yield call(() => request(ARTICLES_QUERY).then(({ data }) => data.articles));
    yield put({ type: GET_ALL_ARTICLES_SUCCESS, payload: articles });
  } catch (e) {
    yield;
  }
}

export function* fetchAllArticles() {
  yield takeLatest(GET_ALL_ARTICLES, fetchArticles$);
}
