import winston from 'winston';
import { ILogger } from './types';

const createLogger = (): ILogger => {
    const loggerInstance = winston.createLogger({
        level: 'info',
        format: winston.format.json(),
        transports: [
            new winston.transports.Console({ format: winston.format.simple() })
        ],
    });

    return {
        error: (message, meta) => loggerInstance.error(message, meta),
        warn: (message, meta) => loggerInstance.warn(message, meta),
        info: (message, meta) => loggerInstance.info(message, meta),
        debug: (message, meta) => loggerInstance.debug(message, meta),
    };
};

export const logger: ILogger = createLogger();
