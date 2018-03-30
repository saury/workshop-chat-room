import { BAD_REQUEST, OK } from 'http-status-codes';
import { createController, logger } from 'modules/core';
import { db, tables } from 'modules/db';

import { serializable } from '../message';

import { createMessage } from './createMessage';
import { isMessageRequest } from './isMessageRequest';

export const controller = createController(async (req, res) => {
    // return 400 if post info is not valid
    if (!isMessageRequest(req.body)) {
        logger.debug(req.body);
        return res.status(BAD_REQUEST).send('Bad Request');
    }

    const msg = createMessage(req.body);
    await db.doc
        .put({
            Item: serializable(msg),
            TableName: tables.messages,
        })
        .promise();
    res.status(OK).json(msg); // return the msg info
});
