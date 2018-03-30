import { OK } from 'http-status-codes';

import { createController } from 'modules/core';
// import { db, tables } from 'modules/db';

export const controller = createController((req, res) => {
    // const data = await db.doc.scan({ TableName: tables.messages }).promise();
    return res.status(OK).json('users');
});
