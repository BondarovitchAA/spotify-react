import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import * as loginActions from 'actions/loginActions';

import Login from 'components/MainContent/Login';

const queryString = require('query-string');


const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;
  const query = queryString.parse(location.search);

  return {
    ...state,
    code : query.code ? query.code : null
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(loginActions, dispatch);

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(LoginContainer);
