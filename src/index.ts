import { server } from './app';
import { logger } from './logger';

server.listen(8888, () => {
    logger.info('ther server is up');
});
