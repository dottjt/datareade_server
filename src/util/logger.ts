import Winston, { Logger } from 'winston';

const createLogger = (): Logger => {
  const logger: Logger = Winston.createLogger({
    level: 'info',
    format: Winston.format.json(),
    exitOnError: false, // same as handleExceptions: true, so is not necessary.
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log`
      // - Write all logs error (and below) to `error.log`.
      //
      new Winston.transports.File({ filename: 'logs/error.log', level: 'error', handleExceptions: true }),
      new Winston.transports.File({ filename: 'logs/combined.log', handleExceptions: true })
    ]
  });

  if (process.env.NODE_ENV !== 'production') {
    logger.add(new Winston.transports.Console({
      format: Winston.format.simple(),
      // colorize: true
    }));
    logger.level = 'debug';
  }
  return logger;
}

const logger: Logger = createLogger();

export default logger;
