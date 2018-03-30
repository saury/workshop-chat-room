import { Express } from 'express';

import { controller as getController } from './get';
import { route } from './route';

export const mount = (app: Express) => {
    app.get(route, getController);
};
