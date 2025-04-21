import winston from "winston";


test("creat logger transport", () => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level: "Info",
        message: "Hello World"
    });
});
