import { combineReducers } from 'redux';

import authReducer from './authReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  authorization: authReducer,
  search: searchReducer
});

export default rootReducer;
