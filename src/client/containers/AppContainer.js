import App from 'components/App';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const routes = [
  { url: '/login', title: 'Sign In', icon: 'fa fa-sign-in', authorize: false, default: true },
  { url: '/', title: 'Now Plaing', icon: 'fa fa-music', authorize: true },
  { url: '/search', title: 'Search', icon: 'fa fa-search', authorize: true },
  { url: '/my-playlists', title: 'My Playlists', icon: 'fa fa-list-ol', authorize: true }
];

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  let currentRoute = routes.find(route => route.default);

  if (state.authorization.isAuthorized) {
    currentRoute = routes.find(route => route.url === location.pathname);
  }

  return {
    routes: routes.filter(route => route.authorize === state.authorization.isAuthorized),
    currentRoute,
    isAuthorized: state.authorization.isAuthorized
  };
};

const mapDispatchToProps = {};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default withRouter(AppContainer);
