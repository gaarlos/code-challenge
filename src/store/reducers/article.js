import {
  GET_ALL_ARTICLES_SUCCESS,
  GET_ARTICLE_BY_ID_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
} from 'store/actions/article';

const initialState = {
  articles: [],
  article: {},
};

export default (state = initialState, { type, response }) => {
  switch (type) {
    case GET_ALL_ARTICLES_SUCCESS:
      const { articles } = response;
      return { ...state, articles };
    case GET_ARTICLE_BY_ID_SUCCESS:
      const { article } = response;
      return { ...state, article };
    case DELETE_ARTICLE_SUCCESS:
      const { id } = response.deleteArticle;
      const newArticles = state.articles.filter(article => article.id !== id);

      return { ...state, articles: newArticles };
    default:
      return state;
  }
};
