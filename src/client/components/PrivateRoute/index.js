import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component : Component, isAuthorized, location, ...rest }) => (
  <Route
    {...rest}
    render={props => isAuthorized
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(PrivateRoute);
