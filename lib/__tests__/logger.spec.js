const setupLogger = require('../logger').default;

const winston = require('winston');

describe('setupLogger', () => {
  it('sets up a logger for development', () => {
    setupLogger({log: 'var/log'});

    expect(winston.loggers.default.transports[0])
      .toBeInstanceOf(winston.transports.Console);
  });
});
