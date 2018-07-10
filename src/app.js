import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

import make_middleware from './middleware';

const middleware = make_middleware({
  fetch,
});

dotenv.config();

const app = express();

// In an actual app, this would be in ./routes.js
// or a similar file. But this is a small example
var router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('Example Home Page');
});

router.get('/lastfm/api/getUserInfo', [
  middleware.getUserInfo, 
  (req, res, next) => {
    // Do some api stuff
    res.status(200).send('Did some api stuff');
  },
]);

router.get('*', (req, res, next) => {
  res.status(404).send('404');
})

app.get('*', router);

module.exports.router = router;
module.exports.app = app;