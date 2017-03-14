/**
 * All subsequent files required by node with the extensions .es6, .es, .jsx
 * and .js will be transformed by Babel.
 */
require('babel-register')({
  presets: ['es2015', 'stage-2', 'react'],
  plugins: ['transform-react-jsx'],
  ignore: /node_modules\/(?!react-render-server)/
});

/**
 * Include server and start it.
 */
require('../lib/server.js');
