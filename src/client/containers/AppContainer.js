import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import * as authActions from 'actions/authActions';
import { connect } from 'react-redux';

import App from 'components/Layout/App';

const routes = [
  { url: '/login', title: 'Sign In', icon: 'fa fa-sign-in', authorize: false, default: true },
  { url: '/', title: 'Now Playing', icon: 'fa fa-music', authorize: true },
  { url: '/search', title: 'Search', icon: 'fa fa-search', authorize: true },
  { url: '/my-playlists', title: 'My Playlists', icon: 'fa fa-list-ol', authorize: true }
];

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  let currentRoute = routes.find(route => route.default);

  if (state.authorization.isAuthorized) {
    currentRoute = routes.find(route => location.pathname === route.url) || currentRoute;
  }

  return {
    routes: routes.filter(route => route.authorize === state.authorization.isAuthorized),
    currentRoute,
    isAuthorized: state.authorization.isAuthorized
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(
  { authorizeSuccess : authActions.authorizeSuccess }, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(AppContainer);
