import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as loginActions from 'actions/loginActions';
import Login from 'components/Login';


const mapStateToProps = (state, ownProps) => {
  const { location } = ownProps;

  return {
    ...state,
    code : location.query ? location.query.code : null
  };
};

const mapDispatchToProps = {
  ...loginActions
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(LoginContainer);
