import { SET_LOADING } from '../actions/loading';

const initialState = true;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};
