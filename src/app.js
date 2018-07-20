import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

import makeMiddleware from './middleware';

const middleware = makeMiddleware({
  fetch,
});

dotenv.config();

const app = express();

// In an actual app, this would be in ./routes.js
// or a similar file. But this is a small example
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('Example Home Page');
});

router.get('/lastfm/api/getUserInfo', [
  middleware.getUserInfo,
  (req, res) => {
    res.locals.user_info.then(userJson => res.send(userJson));
  },
]);

router.get('*', (req, res) => {
  res.status(404).send('404');
});

app.get('*', router);

export default app;
