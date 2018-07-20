module.exports = (deps) => {
  const {
    fetch,
  } = deps;

  const getUserInfo = (req, res, next) => {
    res.locals.user_info = fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${process.env.REGISTERED_TO}&api_key=${process.env.API_KEY}&format=json`)
      .then(response => response.json())
      .catch(err => console.error(err));
    return next();
  };

  return ({
    getUserInfo,
  });
};
