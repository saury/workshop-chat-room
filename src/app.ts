import * as express from 'express';

import { db, setup, tables } from 'modules/db';
import { mount as mountHealth } from 'modules/db/health';

const server = express();

mountHealth(server);

// todo: mount msgs

server.get('/messages', async (req, res) => {
    await setup();
    const data = await db.doc.scan({ TableName: tables.messages }).promise();
    res.status(200).json(data);
});

export { server };
