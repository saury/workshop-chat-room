import { server } from './app';
import { logger } from './logger';

const { port = 8888 } = process.env;

server.listen(port, () => {
    logger.info(`the server is up ${port}`);
});
