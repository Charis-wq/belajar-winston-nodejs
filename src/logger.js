import winston from "winston";
import * as transports from "winston/lib/winston/transports";

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "rejection.log",
    }),
  ],
});
