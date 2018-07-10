module.exports = (deps, opts={}) => {
  const {
    fetch,
  } = deps

  const getUserInfo = (req, res, next) => {
    // Stubbed for now
    next();
  }

  return({
    getUserInfo,
  });
}