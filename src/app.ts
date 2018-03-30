import * as bodyParser from 'body-parser';
import * as express from 'express';

import { setup } from 'modules/db';
import { mount as mountHealth } from 'modules/db/health';
import { mount as mountMsgs } from 'modules/db/messages';

export const appSetup = async () => {
    const server = express();
    server.use(bodyParser.json());

    await setup();

    mountHealth(server);
    mountMsgs(server);

    return server;
};
