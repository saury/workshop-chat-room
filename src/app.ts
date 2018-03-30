import * as bodyParser from 'body-parser';
import * as express from 'express';

import { setup as authSetup } from 'modules/authentication';
import { setup as dbSetup } from 'modules/db';

import { mount as mountHealth } from 'modules/db/health';
import { mount as mountMsgs } from 'modules/db/messages';

export const appSetup = async () => {
    const server = express();
    server.use(bodyParser.json());

    await dbSetup();

    mountHealth(server);

    authSetup(server);
    mountMsgs(server);

    return server;
};
