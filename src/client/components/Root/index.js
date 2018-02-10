import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'helpers/store';
import AppContainer from 'containers/AppContainer';

const Root = () =>  (
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>
);

export default Root;
