import { createController, logger } from 'modules/core';
import { db, setup, tables } from 'modules/db';

export const controller = createController(async (req, res) => {
    logger.info(req.body.messages);
    const data = await db.doc.scan({ TableName: tables.messages }).promise();
    res.status(200).json(data);
});
