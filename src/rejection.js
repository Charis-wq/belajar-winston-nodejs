import winston from "winston";

async function callAsync() {
  return Promise.reject("ups...");
}

const logger = winston.createLogger({
    level: "info",
    transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
            handleRejections: true,
            filename: "rejection.log"
        })
    ]
});


callAsync();
