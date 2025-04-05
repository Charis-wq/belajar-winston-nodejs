import winston from "winston";


test("creat logger file transport", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "app.log"
            }),
        ]
    });  
  logger.info("Hello World");
  logger.warn("Hello World");
  logger.error("Hello World");

});



