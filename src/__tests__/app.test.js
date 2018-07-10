import request from 'supertest';
import {app} from '../app';

describe('app routes', () => {
  it('Should give a 200 response for root path', () => {
    request(app).get('/').then((respone) => {
      expect(response.statusCode).toBe(200);
    });
  });

  it('Should give a 200 response for /lastfm/api/getUserInfo', () => {
    request(app).get('/lastfm/api/getUserInfo', (res) => {
      expect(res.statusCode).toBe(200);
    });
  });

  it('Should yield a 404 response for a url that does not exist', () => {
    request(app).get('/abcdefghijklmnopqrstuvwxyzaasdfa', (res) => {
      expect(res.statusCode).toBe(404);
    });
  });
});
