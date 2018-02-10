import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/index';

const defaultStore = {
  authorization : {
    clientId: '305fa5d1f48e49a9bfa763c2b668bf35',
    isAuthorized: false
  }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, defaultStore, enhancer);

export default store;
