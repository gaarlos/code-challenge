export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const GET_ALL_ARTICLES_SUCCESS = 'GET_ALL_ARTICLES_SUCCESS';
export const GET_ARTICLE_BY_ID = 'GET_ARTICLE_BY_ID';

export const getAllArticles = () => ({
  type: GET_ALL_ARTICLES,
});

export const getAllArticlesSuccess = () => ({
  type: GET_ALL_ARTICLES_SUCCESS,
});

export const getArticleById = () => ({
  type: GET_ARTICLE_BY_ID,
});
