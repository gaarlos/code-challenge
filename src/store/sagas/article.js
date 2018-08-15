import { call, put, takeLatest } from 'redux-saga/effects';

import { ARTICLES_QUERY } from 'queries';
import request from 'request';

import { SET_LOADING } from 'store/actions/loading';
import { GET_ALL_ARTICLES, GET_ALL_ARTICLES_SUCCESS } from 'store/actions/article';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* fetchArticles$() {
  try {
    yield put({ type: SET_LOADING, payload: true });
    yield call(delay, 500);
    const articles = yield call(() => request(ARTICLES_QUERY).then(({ data }) => data.articles));
    yield put({ type: GET_ALL_ARTICLES_SUCCESS, payload: articles });
    yield put({ type: SET_LOADING, payload: false });
  } catch (e) {
    yield;
  }
}

export function* fetchAllArticles() {
  yield takeLatest(GET_ALL_ARTICLES, fetchArticles$);
}
