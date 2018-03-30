import * as request from 'supertest';

import { appSetup } from 'app';

import { route } from './route';

test('dummy', async () => {
    expect.assertions(2);

    let response;
    try {
        response = await request(await appSetup()).get(route);
    } catch (error) {
        throw error;
    }

    expect(response.status).toBe(200);
    expect(response.text).toBe('All is well');
});
