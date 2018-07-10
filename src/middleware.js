module.exports = (deps, opts={}) => {
  const {
    fetch,
  } = deps

  const getUserInfo = async (req, res, next) => {
    res.locals.user_info = await fetch('https://ws.audioscrobbler.com/2.0/?'+
      'method=user.getinfo&' +
      'user=n8yo&' + 
      'api_key=' + process.env.API_KEY +
      '&format = json').catch((err) => {
        return Promise.reject(err);
      });
    return Promise.resolve(next());
  }

  return({
    getUserInfo,
  });
}
