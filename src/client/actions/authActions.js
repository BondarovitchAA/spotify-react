import settings from 'constants/constants';
import { actionTypes } from './actionTypes';


export function sendAuthorizeRequest() {
  return () => {
    const url = `${settings.baseUrl}authorize?` +
    `client_id=${settings.clientId}&response_type=token&` +
    `redirect_uri=${settings.redirectUrl}`;

    window.location = url;
  };
}

export function authorizeSuccess(accessToken) {
  return {
    type: actionTypes.AUTHORIZE_SUCCESS,
    accessToken
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
