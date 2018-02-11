import { actionTypes } from 'actions/actionTypes';

const authReducer = (state = { isAuthorized: false }, action) => {
  switch (action.type) {
    case actionTypes.AUTHORIZE_SUCCESS :
      return {
        isAuthorized: true,
        accessToken: action.accessToken
      };
    case actionTypes.AUTHORIZE_FAILED:
    case actionTypes.SIGNOUT:
      return {
        isAuthorized: false
      };
    default:
      return state;
  }
};

export default authReducer;
