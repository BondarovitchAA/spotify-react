import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SideBar from 'components/Layout/SideBar';
import MainPanel from 'components/Layout/MainPanel';

import './style.scss';

class App extends PureComponent {
  componentWillMount() {
    if (!this.props.isAuthorized) {
      const token = sessionStorage.getItem('accessToken');

      if (token && token !== '') {
        const tokenExpires = Date.parse(sessionStorage.getItem('tokenExpires'));

        if (tokenExpires > new Date()) {
          this.props.authorizeSuccess(token);
        }
      }
    }
  }

  render() {
    return (<div className='container root__container'>
      <SideBar
        routes={this.props.routes}
        currentRoute={this.props.currentRoute}
        className='container__sidebar'
      />
      <MainPanel
        isAuthorized={this.props.isAuthorized}
        title={this.props.currentRoute.title}
        className='container__main-panel'
      />
    </div>);
  }
}

App.propTypes = {
  routes: PropTypes.array.isRequired,
  currentRoute: PropTypes.object.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  authorizeSuccess: PropTypes.func.isRequired
};

export default withRouter(App);
