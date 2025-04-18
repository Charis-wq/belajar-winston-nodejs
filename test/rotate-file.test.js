import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test ("testting for rotate daily file", () =>{
    
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new DailyRotateFile({
                filename: "app-%DATE%.log",
                zippedArchive: true,
                maxSize: "1m",
                maxFiles: "7d"
            })
        ]
    });
    
    for (let i = 0; i < 1000; i++ ){
        logger.info(`Hello World ${i}`);
    }
});

