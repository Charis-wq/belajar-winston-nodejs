import winston, { level } from "winston";


test("creat logger file transport", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "app.log"
            }),
            new winston.transports.File({
                level: "error",
                filename: "app-error.log"
            }),
        ]
    });  
  logger.info("Hello World");
  logger.warn("Hello World");
  logger.error("Hello World");

});



