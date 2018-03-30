import { Express } from 'express';

import { controller as getController } from './get';
import { controller as postController } from './post';
import { route } from './route';

export const mount = (app: Express) => {
    app.get(route, getController);
    app.post(route, postController);
};
