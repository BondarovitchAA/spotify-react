import fetch from 'cross-fetch';

function refreshToken() {
  const token = sessionStorage.getItem('refreshToken');
  const refreshUrl = `/refresh/${token}`;

  return fetch(refreshUrl)
    .then(response => response.json())
    .catch(error => console.log(error));
}

function fetchWithToken(url, method = 'GET') {
  const accessToken = sessionStorage.getItem('accessToken');

  return fetch(url, {
    method,
    headers: new Headers({
      'Authorization': `Bearer ${accessToken}`
    })
  }).then(response => response.json())
    .catch(error => console.log(error));
}

export function get(url) {
  const expires = sessionStorage.getItem('tokenExpires');

  if (Date.parse(expires) < Date.now()) {
    return refreshToken().then(() => fetchWithToken(url));
  }

  return fetchWithToken(url);
}

export function post(url, data) {
  const expires = sessionStorage.getItem('tokenExpires');

  if (Date.parse(expires) < Date.now()) {
    return refreshToken().then(() => fetchWithToken(url, 'POST', data));
  }

  return fetchWithToken(url, 'POST', data);
}
