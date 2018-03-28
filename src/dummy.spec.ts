import * as request from 'supertest';

import { server } from './app';

test('dummy', async () => {
    expect.assertions(2);

    let response;
    try {
        response = await request(server).get('/health');
    } catch (error) {
        throw error;
    }

    expect(response.status).toBe(200);
    expect(response.text).toBe('All is ok 4434');
});
