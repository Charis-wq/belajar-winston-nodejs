import winston, { verbose } from "winston";


test("creat format for level format", () => {
    const logger = winston.createLogger({
        level: "info",
        //format: winston.format.json(),
        //format: winston.format.simple(),
        format: winston.format.logstash(),
        
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({level: "info", message: "Hello Info"});
});


test("creat format for level printf format", () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.printf(info =>{
            return `${new Date()} : ${info.level.toLocaleUpperCase()} : ${info.message}`;
        }),
        
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info('Hello World');
});


test("creat format for combain format", () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        ),
        
        transports: [
            new winston.transports.Console({})
        ]
    });
    
    logger.info('Hello World');
    logger.warn('Hello World');
    logger.error('Hello World');
});
 
 
 
