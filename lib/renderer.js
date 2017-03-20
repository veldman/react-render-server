import reactRender from 'react-render';
import winston from 'winston';

/**
 * Request handler.
 * @param req {object} - The Request object
 * @param res {object} - The Response object.
 * @returns {undefined}
 */
export default function handleRequest(req, res) {

  /**
   * Because of
   */
  const {serializedProps} = req.body;
  if (serializedProps) {
    let props = JSON.parse(serializedProps);
    delete req.body.serializedProps;
    let error = null;

    if (props.hasOwnProperty('storePath')) {
      const storePath = props.storePath;
      delete props.storePath;

      try {
        const configureStore = require(storePath).default;

        props = {store: configureStore(props)};
      } catch(err) {
        winston.error(err);
      }
    }

    req.body.props = props;
  }

  reactRender(req.body, (err, markup) => {

    if (err) {
      winston.error(err);

      const {constructor: {name: type}, message, stack} = err;
      markup = null;

      error = {type, message, stack};
    }

    res.json({error, markup});

  });
}
