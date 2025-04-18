import winston from "winston";
import TransportStream from "winston-transport";

test ("creat new build transport from winston", () => {

    class MyTransoprt extends TransportStream {
        constructor(option){
            super(option);
        }

        log(info, next){
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next();
        }
    }

    const logger = winston.createLogger({
        level: "silly",
        transports: [
            new MyTransoprt({})
        ]
    });

    logger.error("Hello Error");
    logger.warn("Hello Warn");
    logger.info("Hello Info");
    logger.http("Hello HTTP");
    logger.verbose("Hello Verbose");
    logger.debug("Hello Debugging");
    logger.silly("Hello Silly");
});