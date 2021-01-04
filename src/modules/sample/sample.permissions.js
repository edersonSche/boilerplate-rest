module.exports = {
  get: (req, res, next) => {
    if (req.query.permission) {
      return next({ status: 403 });
    }
    return next();
  }
};
