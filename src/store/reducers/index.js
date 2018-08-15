import { combineReducers } from 'redux';

import article from './article';
import loading from './loading';

export default combineReducers({
  article,
  loading,
});
