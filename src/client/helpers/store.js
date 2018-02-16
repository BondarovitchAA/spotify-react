import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/index';

const defaultStore = {
  authorization : {
    isAuthorized: false
  },
  search: {
    isFetching: false,
    results: [],
    pagination: {
      total: 0,
      previous: null,
      next: null
    }
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, defaultStore, enhancer);

export default store;
