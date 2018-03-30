import { OK } from 'http-status-codes';

import { createController } from 'modules/core/createcontroller';

export const controller = createController(async (req, res) => {
    // throw new Error('shit');
    return res.status(OK).send('All is well');
});
