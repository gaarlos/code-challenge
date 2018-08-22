import {
  GET_ALL_ARTICLES_SUCCESS,
  GET_ARTICLE_BY_ID_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_SUCCESS,
} from 'store/actions/article';

const initialState = {
  articles: [],
  article: {},
};

export default (state = initialState, { type, response }) => {
  switch (type) {
    case GET_ALL_ARTICLES_SUCCESS:
      let { articles } = response;
      return { ...state, articles };
    case GET_ARTICLE_BY_ID_SUCCESS:
      let { article } = response;
      return { ...state, article };
    case DELETE_ARTICLE_SUCCESS:
      let { id } = response.deleteArticle;
      const newArticles = state.articles.filter(article => article.id !== id);

      return { ...state, articles: newArticles };
    case UPDATE_ARTICLE_SUCCESS:
      let { updateArticle } = response;
      return { ...state, article: updateArticle };
    default:
      return state;
  }
};
