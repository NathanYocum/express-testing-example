import makeMiddleware from '../middleware';

mockFetch = jest.fn().mockImplementation((url) => {
  if(url == 'reject'){
    return Promise.reject('rejected');
  }else{
    return Promise.resolve(url);
  }
});

describe('getUserInfo', () => {
  it('Should call the api correctly', () => {
    expect(fetch).toHaveBeenCalledWith('https://www.http://ws.audioscrobbler.com/2.0/?'+
      'method=getinfo&' +
      'user=n8yo&' + 
      'api_key=' + process.env.API_KEY +
      '&format = json');
  });
});