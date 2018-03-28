import { createController } from 'modules/core/createcontroller';

export const controller = createController(async (req, res) => {
    // throw new Error('shit');
    return res.status(200).send('All is well');
});
