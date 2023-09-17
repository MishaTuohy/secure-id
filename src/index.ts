import "reflect-metadata";
import { createServer } from './server';
import { logger } from './utilities/logger';
import { db } from "./database";

const PORT = process.env.PORT || 3000;

let serversToClose = 2;

const gracefulShutdown = (signal: string, serverInstance: any) => {
  logger.info(`Received ${signal}. Shutting down gracefully...`);
  serverInstance.close(() => {
    logger.info(`${signal} signal received, server has been gracefully shutdown.`);
    serversToClose -= 1;
    if (serversToClose === 0) {
      process.exit(0);
    }
  });
};

(async () => {
    await db.initialize();

    const app = createServer({ logger });
    const serverInstance = app.listen(PORT, () => {
        logger.info(`Server listening on port ${PORT}`);
    });

    process.on('SIGINT', () => {
      gracefulShutdown('SIGINT', serverInstance);
    });

    process.on('SIGTERM', () => {
      gracefulShutdown('SIGTERM', serverInstance);
    });
})();
