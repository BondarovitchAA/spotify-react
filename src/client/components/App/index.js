import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SideBar from 'components/SideBar';
import MainPanel from 'components/MainPanel';

import './style.scss';

const App = ({ routes, currentRoute, isAuthorized }) => (
  <div className='container container--dark'>
    <SideBar
      routes={routes}
      currentRoute={currentRoute}
      className='container__sidebar'
    />
    <MainPanel
      isAuthorized={isAuthorized}
      title={currentRoute.title}
      className='container__main-panel'
    />
  </div>
);

App.propTypes = {
  routes: PropTypes.array.isRequired,
  currentRoute: PropTypes.object.isRequired,
  isAuthorized: PropTypes.bool.isRequired
};

export default withRouter(App);
