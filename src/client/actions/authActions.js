import { actionTypes } from './actionTypes';


export function sendAuthorizeRequest() {
  return () => {
    window.location = '/api/login';
  };
}

export function authorizeSuccess(accessToken) {
  return {
    type: actionTypes.AUTHORIZE_SUCCESS,
    payload: {
      accessToken
    }
  };
}

export function authorizeFailed() {
  return {
    type: actionTypes.AUTHORIZE_FAILED
  };
}

export function signOut() {
  return {
    type: actionTypes.SIGNOUT
  };
}
