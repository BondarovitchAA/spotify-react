import { combineReducers } from 'redux';

import authReducer from './authReducer';

const rootReducer = combineReducers({
  authorization: authReducer
});

export default rootReducer;
