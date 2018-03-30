import * as shorid from 'shortid';

import { BAD_REQUEST, OK } from 'http-status-codes';

import { db, tables } from 'modules/db';

import { createController, logger } from 'modules/core';

import { isSignUpRequest } from './isSignUpRequest';

export const controller = createController(async (req, res) => {
    // const data = await db.doc.scan({ TableName: tables.messages }).promise();
    if (!isSignUpRequest(req.body)) {
        logger.debug(req.body);
        res.status(BAD_REQUEST).send('Bad Request');
    }

    const user = { id: shorid.generate(), ...req.body };

    await db.doc
        .put({
            Item: user,
            TableName: tables.users,
        })
        .promise();

    res.status(OK).json(user);
});
