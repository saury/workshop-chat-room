import { Express } from 'express';

import { controller } from './controller';
import { route } from './route';

export const mount = (app: Express) => {
    app.post(route, controller);
};
