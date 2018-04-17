import { BAD_REQUEST, OK } from 'http-status-codes';
import { createController, logger } from 'modules/core';
import { db, tables } from 'modules/db';
import * as shortid from 'shortid';

import { allFromDb } from '../allFromDb';

import { isSignInRequest } from './isSignInRequest';

export const controller = createController(async (req, res) => {
    // const data = await db.doc.scan({ TableName: tables.messages }).promise();
    if (!isSignInRequest(req.body)) {
        logger.debug(req.body);
        return res.status(BAD_REQUEST).send('Bad Request');
    }

    // verify if user exists
    const users = await allFromDb();
    const findUser = users!.find((_user) => {
        return _user.username === req.body.username;
    });

    if (!findUser) {
        return res.status(BAD_REQUEST).send("There's no such user!");
    }

    // verify the pwd
    const correctUser = users!.find((_user) => {
        return _user.username === req.body.username && _user.password === req.body.password;
    });

    if (!correctUser) {
        return res.status(BAD_REQUEST).send('Wrong password!');
    }

    res.status(OK).json(correctUser);
});
