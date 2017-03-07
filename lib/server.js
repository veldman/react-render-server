import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import winston from 'winston';

import setupLogger from './logger';
import renderer from './renderer';

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
 * Setup express and HTTP server.
 */
const app = express();
const server = http.Server(app);

app.use(bodyParser.json());

/**
 * Render post call for the application, returns parsed JSX, or error when not
 * being able to parse.
 */
app.post('/render', renderer);

/**
 * Start server.
 */
server.listen(argv.port, argv.address, () => {
  winston.info(
    `React render server listening at http://${argv.address}:${argv.port}`
  );
});
