export function fetchWithToken(url, method = 'GET') {
  const accessToken = sessionStorage.getItem('accessToken');

  return fetch(url, {
    method,
    headers: new Headers({
      'Authorization': `Bearer ${accessToken}`
    })
  });
}

