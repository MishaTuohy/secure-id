import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import router from './api/router';
import corsOptions from './config/cors.config';
import cookieConfig from './config/cookies.config';
import helmetConfig from './config/helmet.config';
import { ILogger } from './utilities/logger/types';
import { loggerMiddleware } from './middleware/logging';
import { errorHandlerMiddleware } from './middleware/errorHandler';
import { verifyTokenMiddleware } from './middleware/tokenVerification';

interface ServerOptions {
    logger: ILogger;
}

export const createServer = (options: ServerOptions): Express => {
    const server: Express = express();

    server.use(cors(corsOptions));
    server.use(helmet(helmetConfig));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    
    server.use(cookieParser(cookieConfig.secret));
    server.use(loggerMiddleware(options.logger));
    server.use(verifyTokenMiddleware);

    server.use('/v1', router);

    server.use(errorHandlerMiddleware);

    return server;
}
