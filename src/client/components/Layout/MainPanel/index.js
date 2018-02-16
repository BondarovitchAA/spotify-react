import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Player from 'components/Player';
import PrivateRoute from 'components/Utilities/PrivateRoute';
import NotFound from 'components/Utilities/NotFound';

import SearchContainer from 'containers/SearchContainer';
import HeaderContainer from 'containers/HeaderContainer';
import LoginContainer from 'containers/LoginContainer';

import './style.scss';

const MainPanel = ({ title, isAuthorized }) => (
  <section className='main-panel'>
    <HeaderContainer title={title} />
    <div className='main-panel__center-container'>
      <Switch>
        <PrivateRoute exact path='/'
          className='main-panel__player'
          isAuthorized={isAuthorized}
          component={Player}
        />
        <PrivateRoute path='/search'
          className='main-panel__search'
          isAuthorized={isAuthorized}
          component={SearchContainer}
        />
        <Route path='/login' component={LoginContainer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </section>
);

MainPanel.propTypes = {
  title: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired
};

export default MainPanel;

