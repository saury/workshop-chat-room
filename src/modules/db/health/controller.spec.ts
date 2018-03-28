import * as request from 'supertest';

import { server } from 'app';

import { route } from './route';

test('dummy', async () => {
    expect.assertions(2);

    let response;
    try {
        response = await request(server).get(route);
    } catch (error) {
        throw error;
    }

    expect(response.status).toBe(200);
    expect(response.text).toBe('All is well');
});
