import { GET_ALL_ARTICLES_SUCCESS } from 'store/actions/article';

const initialState = {
  articles: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ARTICLES_SUCCESS:
      const articles = action.payload;
      return { ...state, articles };
    default:
      return state;
  }
};
