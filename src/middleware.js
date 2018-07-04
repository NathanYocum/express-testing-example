module.exports = (deps, opts={}) => {
  const fetch = deps.fetch

  const getUserInfo = (req, res, next) => {
    // Stubbed for now
    next();
  }

  return({
    getUserInfo,
  });
}