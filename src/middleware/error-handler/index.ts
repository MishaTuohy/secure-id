import { Request, Response, NextFunction } from 'express';
import { logger } from '../../utilities/logger';
import { CustomErrorBase } from '../../utilities/errors/types';

export function errorHandler(err: CustomErrorBase, req: Request, res: Response, next: NextFunction) {
    const statusCode = err.statusCode || 500;
    const status = err.name || 'error';

    if (process.env.NODE_ENV === 'development') {
        res.status(statusCode).json({
            status: status,
            error: err.name,
            message: err.message,
        });
    } else if (process.env.NODE_ENV === 'production') {
        logger.error(`Error (${statusCode}): ${err.message}`, err);
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong!'
        });
    }

    next(err);
}
