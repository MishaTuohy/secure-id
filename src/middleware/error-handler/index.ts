import { Request, Response, NextFunction } from 'express';
import { logger } from '../../utilities/logger';
import { CustomErrorBase } from '../../utilities/errors/types';

function errorHandler(err: CustomErrorBase, req: Request, res: Response, next: NextFunction) {
    const statusCode = err.statusCode || 500;
    const status = err.name || 'error';

    if (process.env.NODE_ENV === 'development') {
        res.status(statusCode).json({
            status: status,
            error: err.name,
            message: err.message,
        });
    } else if (process.env.NODE_ENV === 'production') {
        if (err.isOperational) {
            res.status(statusCode).json({
                status: status,
                message: err.message
            });
        } else {
            logger.error(`Error (${statusCode}): ${err.message}`, err);
            res.status(500).json({
                status: 'error',
                message: 'Something went wrong!'
            });
        }
    }

    // Optional: if you'd like to continue passing the error down the middleware chain.
    next(err);
}

export { errorHandler };
