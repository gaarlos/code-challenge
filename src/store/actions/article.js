export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const GET_ALL_ARTICLES_SUCCESS = 'GET_ALL_ARTICLES_SUCCESS';
export const GET_ARTICLE_BY_ID = 'GET_ARTICLE_BY_ID';
export const GET_ARTICLE_BY_ID_SUCCESS = 'GET_ARTICLE_BY_ID_SUCCESS';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const DELETE_ARTICLE_SUCCESS = 'DELETE_ARTICLE_SUCCESS';
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';
export const UPDATE_ARTICLE_SUCCESS = 'UPDATE_ARTICLE_SUCCESS';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';

export const getAllArticles = () => ({
  type: GET_ALL_ARTICLES,
});

export const getAllArticlesSuccess = () => ({
  type: GET_ALL_ARTICLES_SUCCESS,
});

export const getArticleById = payload => ({
  type: GET_ARTICLE_BY_ID,
  payload,
});

export const getArticleByIdSuccess = () => ({
  type: GET_ARTICLE_BY_ID_SUCCESS,
});

export const deleteArticle = payload => ({
  type: DELETE_ARTICLE,
  payload,
});

export const deleteArticleSuccess = payload => ({
  type: DELETE_ARTICLE_SUCCESS,
  payload,
});

export const updateArticle = payload => ({
  type: UPDATE_ARTICLE,
  payload,
});

export const updateArticleSuccess = payload => ({
  type: UPDATE_ARTICLE_SUCCESS,
  payload,
});

export const createArticle = payload => ({
  type: CREATE_ARTICLE,
  payload,
});
