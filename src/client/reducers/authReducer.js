import { actionTypes } from 'actions/actionTypes';

const authReducer = (state = { isAuthorized: false }, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS :
      return {
        isAuthorized: true,
        code: state.code
      };
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.LOGOUT:
      return {
        isAuthorized: false
      };
    default:
      return state;
  }
};

export default authReducer;
