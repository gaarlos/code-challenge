export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const GET_ALL_ARTICLES_SUCCESS = 'GET_ALL_ARTICLES_SUCCESS';
export const GET_ARTICLE_BY_ID = 'GET_ARTICLE_BY_ID';
export const GET_ARTICLE_BY_ID_SUCCESS = 'GET_ARTICLE_BY_ID_SUCCESS';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

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
