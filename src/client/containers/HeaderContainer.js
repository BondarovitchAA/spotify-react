import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions from 'actions/authActions';

import Header from 'components/Layout/Header';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators(
  { signOut: loginActions.signOut }, dispatch);

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
