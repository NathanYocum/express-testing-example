import makeMiddleware from '../middleware';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Mock functions
 */
let fetch = jest.fn().mockImplementation((url) => {
  if(url == 'reject'){
    return Promise.reject('rejected');
  }else{
    return Promise.resolve(url);
  }
});

let mockMiddleware = makeMiddleware({
  fetch,
});

let req = jest.fn();
let res = jest.fn();
res.locals = jest.fn();
let next = jest.fn();

describe('getUserInfo', () => {
  it('Should call the api correctly', () => {
    mockMiddleware.getUserInfo(req, res, next);
    expect(fetch).toHaveBeenCalledWith('https://ws.audioscrobbler.com/2.0/?'+
      'method=user.getinfo&' +
      'user=n8yo&' + 
      'api_key=' + process.env.API_KEY +
      '&format = json');
  });

  it('Should reject when called with an incorrect url', () => {
    fetch.mockImplementation(() => Promise.reject('wrong'));
    expect(mockMiddleware.getUserInfo(req,res,next)).rejects.toBe('wrong');
  });

  it('Should return next() when called with a correct url', () => {
    fetch.mockImplementation(() => Promise.resolve());
    next.mockImplementation(() => 'next()');
    expect(mockMiddleware.getUserInfo(req, res, next)).resolves.toBe('next()');
  });
});
