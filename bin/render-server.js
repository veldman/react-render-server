#!/usr/bin/env node

/**
 * All subsequent files required by node with the extensions .es6, .es, .jsx
 * and .js will be transformed by Babel.
 */
require('babel-register')({
  presets: ['es2015', 'stage-2', 'react'],
  plugins: ['transform-react-jsx'],
  ignore: /node_modules\/(?!react-render-server)/
});


const winston = require('winston');
const setupLogger = require('../lib/logger').default;
const http = require('http');

/**
 * Yargs be a node.js library fer hearties tryin' ter parse optstrings.
 *
 * With yargs, ye be havin' a map that leads straight to yer treasure!
 * Treasure of course, being a simple option hash.
 */
const argv = require('yargs').option('p', {
  alias: 'port',
  description: 'Specify the server\'s port',
  default: 8001
}).option('a', {
  alias: 'address',
  description: 'Specify the server\'s address',
  default: '127.0.0.1'
}).option('l', {
  alias: 'log',
  description: 'Specify the logfile location',
  default: './var/log'
}).help('h').alias('h', 'help').strict().argv;

setupLogger(argv);

/**
 * Include server and start it.
 */
const app = require('../lib/server.js').default;

const server = http.Server(app);

server.listen(argv.port, argv.address, () => {
  winston.info(
    `React render server listening at http://${argv.address}:${argv.port}`
  );
});