require('babel-register')({
  presets: ['env', 'react']
});
['.css', '.less', '.scss', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('./src/server/index.js');
