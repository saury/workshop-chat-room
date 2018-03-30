import { BAD_REQUEST, OK } from 'http-status-codes';
import { createController, logger } from 'modules/core';
import { db, tables } from 'modules/db';

import { isMessageRequest } from './isMessageRequest';

export const controller = createController(async (req, res) => {
    // return 400 if post info is not valid
    if (!isMessageRequest(req.body)) {
        logger.debug(req.body);
        return res.status(BAD_REQUEST).send('Bad Request');
    }
    logger.debug(req.body.message);
    const data = await db.doc.scan({ TableName: tables.messages }).promise();
    res.status(OK).json(data);
});
