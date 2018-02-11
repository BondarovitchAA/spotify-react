export function parseHash(hash) {
  const params = {};

  hash.substr(1).split('&').map(hk => {
    const temp = hk.split('=');

    params[temp[0]] = temp[1];
  });
  return params;
}
