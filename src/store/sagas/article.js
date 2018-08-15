import { call, put, takeLatest } from 'redux-saga/effects';

import { ARTICLES_QUERY, ARTICLE_BY_ID_QUERY } from 'graphql/queries';
import request from 'graphql/request';

import { SET_LOADING } from 'store/actions/loading';
import {
  GET_ALL_ARTICLES,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ARTICLE_BY_ID,
  GET_ARTICLE_BY_ID_SUCCESS,
} from 'store/actions/article';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* sagasHelper(query, successAction) {
  try {
    yield put({ type: SET_LOADING, payload: true });
    yield call(delay, 500);
    const response = yield call(() => request(query).then(({ data }) => data));
    if (successAction) {
      yield put({ type: successAction, response });
    }
    yield put({ type: SET_LOADING, payload: false });
  } catch (e) {
    yield;
  }
}

function fetchArticle$({ payload }) {
  const query = ARTICLE_BY_ID_QUERY(payload.articleId);
  return sagasHelper(query, GET_ARTICLE_BY_ID_SUCCESS);
}

function fetchArticles$() {
  const query = ARTICLES_QUERY;
  return sagasHelper(query, GET_ALL_ARTICLES_SUCCESS);
}

export function* fetchAllArticles() {
  yield takeLatest(GET_ALL_ARTICLES, fetchArticles$);
}

export function* fetchArticleById() {
  yield takeLatest(GET_ARTICLE_BY_ID, fetchArticle$);
}
