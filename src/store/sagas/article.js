import { call, put, takeLatest } from 'redux-saga/effects';
import { history } from 'app/AppWithNavigation';

import {
  ARTICLES_QUERY,
  ARTICLE_BY_ID_QUERY,
  DELETE_ARTICLE_QUERY,
  UPDATE_ARTICLE_QUERY,
  ADD_ARTICLE_QUERY,
} from 'graphql/queries';
import { articleRequest } from 'graphql/request';

import { SET_LOADING } from 'store/actions/loading';
import {
  GET_ALL_ARTICLES,
  GET_ALL_ARTICLES_SUCCESS,
  GET_ARTICLE_BY_ID,
  GET_ARTICLE_BY_ID_SUCCESS,
  DELETE_ARTICLE,
  DELETE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE,
  UPDATE_ARTICLE_SUCCESS,
} from 'store/actions/article';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* sagaWithLoader({ query, url, successAction, successActionPayload }) {
  try {
    yield put({ type: SET_LOADING, payload: true });
    yield call(delay, 500);
    const response = yield call(() =>
      articleRequest({ query, url })
        .then(({ data }) => data)
        .catch(err => {
          throw new Error(err);
        }),
    );

    if (successAction) {
      yield put({ type: successAction, response: { ...response, ...successActionPayload } });
    }

    yield put({ type: SET_LOADING, payload: false });
  } catch (e) {
    history.replace(`/error/${404}`);
  }
}

function fetchArticle$({ payload }) {
  const query = ARTICLE_BY_ID_QUERY(payload.articleId);
  return sagaWithLoader({ query, successAction: GET_ARTICLE_BY_ID_SUCCESS });
}

function fetchArticles$() {
  const query = ARTICLES_QUERY;
  return sagaWithLoader({ query, successAction: GET_ALL_ARTICLES_SUCCESS });
}

function deleteArticle$({ payload }) {
  const query = DELETE_ARTICLE_QUERY(payload.articleId);
  return sagaWithLoader({ query, url: '/delete', successAction: DELETE_ARTICLE_SUCCESS });
}

function updateArticle$({ payload }) {
  const query = UPDATE_ARTICLE_QUERY(payload);
  return sagaWithLoader({ query, url: '/update', successAction: UPDATE_ARTICLE_SUCCESS });
}

export function* fetchAllArticles() {
  yield takeLatest(GET_ALL_ARTICLES, fetchArticles$);
}

export function* fetchArticleById() {
  yield takeLatest(GET_ARTICLE_BY_ID, fetchArticle$);
}

export function* deleteArticleById() {
  yield takeLatest(DELETE_ARTICLE, deleteArticle$);
}

export function* updateArticleById() {
  yield takeLatest(UPDATE_ARTICLE, updateArticle$)
}
