import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import * as loginActions from 'actions/authActions';

import Login from 'components/Login';
import { parseHash } from 'helpers/urlHelpers';

const queryString = require('query-string');

const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const queryParams = queryString.parse(location.search);
  const hashParams = parseHash(location.hash);

  return {
    isAuthorized: state.authorization.isAuthorized,
    error: queryParams.error,
    accessToken: hashParams.access_token || state.authorization.accessToken,
    expiresIn: +hashParams.expires_in,
    redirectedFrom: location.state && location.state.from && location.state.from.pathname
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(loginActions, dispatch);

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(LoginContainer);
