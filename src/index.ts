import { app } from './server';

const PORT = process.env.PORT || 3000;

let serversToClose = 2;

const gracefulShutdown = (signal: string, server: any) => {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log(`${signal} signal received, server has been gracefully shutdown.`);
    serversToClose -= 1;
    if (serversToClose === 0) {
      process.exit(0);
    }
  });
};

const server = app.listen(PORT);

process.on('SIGINT', () => {
  gracefulShutdown('SIGINT', server);
});

process.on('SIGTERM', () => {
  gracefulShutdown('SIGTERM', server);
});

console.log(`Server listening on port ${PORT}`);
