import settings from 'constants/constants';
import actionTypes from 'actions/actionTypes';

export function sendAuthorizeRequest() {
  return () => {
    const baseUrl = 'https://accounts.spotify.com/authorize?';
    const redirectUrl = 'http://localhost:3001/login/';
    const url = `${baseUrl}client_id=${settings.clientId}&response_type=code&redirect_uri=${redirectUrl}`;

    window.location = url;
  };
}

export function authorize(code) {
  return {
    action: actionTypes.LOGIN_SUCCESS,
    code
  };
}
