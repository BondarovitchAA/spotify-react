require('babel-register')({
    presets: ['env']
});
['.css', '.less', '.scss', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('server.js');