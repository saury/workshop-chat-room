import * as shorid from 'shortid';

import { BAD_REQUEST, OK } from 'http-status-codes';

import { db, tables } from 'modules/db';

import { createController, logger } from 'modules/core';

import { isSignUpRequest } from './isSignUpRequest';

import { allFromDb } from './allFromDb';

export const controller = createController(async (req, res) => {
    // const data = await db.doc.scan({ TableName: tables.messages }).promise();
    if (!isSignUpRequest(req.body)) {
        logger.debug(req.body);
        return res.status(BAD_REQUEST).send('Bad Request');
    }

    // verify if user exists
    const users = await allFromDb();
    const findUser = users!.find((_user) => {
        return _user.username === req.body.username;
    });
    if (findUser) {
        return res.status(BAD_REQUEST).send('exist user');
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
