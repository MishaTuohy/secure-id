import express, { Express } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import router from './api/router';
import corsOptions from './config/cors.config';
import cookieConfig from './config/cookies.config';
import helmetConfig from './config/helmet.config';

const app: Express = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(cookieConfig.secret));
app.use(helmet(helmetConfig));
app.use('/v1', router);

export { app };
