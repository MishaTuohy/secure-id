import { Request, Response, NextFunction } from 'express';
import { ILogger } from '../../utilities/logger/types';

export const loggerMiddleware = (logger: ILogger) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const startHrTime = process.hrtime();

        res.on('finish', () => {
            const elapsedHrTime = process.hrtime(startHrTime);
            const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
            logger.info(`HTTP ${req.method} ${req.originalUrl} ${res.statusCode} ${elapsedTimeInMs.toFixed(3)}ms`);
        });

        next();
    };
};
