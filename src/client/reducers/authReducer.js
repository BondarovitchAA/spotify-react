import actionTypes from 'actions/actionTypes';

const authReducer = (state = {}, action) => {
  switch (action) {
    case actionTypes.LOGIN_SUCCESS :
      return {
        loggedIn: true,
        code: state.code
      };
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT:
      return {
        loggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;
