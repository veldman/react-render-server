const winston = require('winston');
const process = require('process');

function setupLogger(argv) {
  /**
   * Timestamp function for the logger.
   * @return {string}
   */
  const timestamp = function () {
    return new Date().toISOString();
  };

  /**
   * Formatter for the logger.
   * @param options
   * @return {string}
   */
  const formatter = function (options) {
    // Return string will be passed to logger.

    let {timestamp, level, message, meta} = options;
    let metaOptions = '';
    if (meta && Object.keys(meta).length) {
      metaOptions = ` \n\t${JSON.stringify(meta)}`;
    }
    return `${timestamp()} ${level.toUpperCase()} ${message || ''}${metaOptions}`;
  };

  /**
   * When node is in production, add file loggers instead of console.
   */
  if (process.env.NODE_ENV === 'production') {
    winston.configure({
      level: 'info',
      transports: [
        new (winston.transports.File)({
          name: 'info-file',
          filename: `${argv.log}/render-server-info.log`,
          level: 'info',
          json: false,
          timestamp, formatter
        }),
        new (winston.transports.File)({
          name: 'error-file',
          filename: `${argv.log}/render-server-error.log`,
          level: 'error',
          json: false,
          timestamp, formatter
        })
      ]
    });
  }
}

export default setupLogger;
