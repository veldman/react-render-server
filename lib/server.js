import express from 'express';
import bodyParser from 'body-parser';

import renderer from './renderer';

/**
 * Setup express and HTTP server.
 */
const app = express();

app.use(bodyParser.json());

/**
 * Render post call for the application, returns parsed JSX, or error when not
 * being able to parse.
 */
app.post('/render', renderer);

export default app;
