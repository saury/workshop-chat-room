import { server } from './app';
import { logger } from './modules/core';

const { port = 8888 } = process.env;

server.listen(port, () => {
    logger.info(`the server is up ${port}`);
});
