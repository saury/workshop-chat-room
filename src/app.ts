import * as express from 'express';

const server = express();

server.get('/health', (req, res) => {
    return res.status(200).send('All is ok 4434');
});

export { server };
