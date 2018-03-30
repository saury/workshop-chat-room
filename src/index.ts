import { appSetup } from './app';
import { logger } from './modules/core';

const { port = 8888 } = process.env;

(async function startUp() {
    const server = await appSetup();

    server.listen(port, () => {
        logger.info(`the server is up ${port}`);
    });
})();
