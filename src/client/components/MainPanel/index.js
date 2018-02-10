import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import PrivateRoute from 'components/PrivateRoute';
import Player from 'components/Player';
import LoginContainer from 'containers/LoginContainer';


import './style.scss';

const MainPanel = ({ title, isAuthorized }) => (
  <section className='main-panel'>
    <Header title={title} />
    <div className='main-panel__center-container'>
      <PrivateRoute exact path='/'
        isAuthorized={isAuthorized}
        component={Player}
      />
      <PrivateRoute path='/search'
        isAuthorized={isAuthorized}
        component={Player}
      />
      <Route path='/login' component={LoginContainer} />
    </div>
  </section>
);

MainPanel.propTypes = {
  title: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired
};

export default MainPanel;

