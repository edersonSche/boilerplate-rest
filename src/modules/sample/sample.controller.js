module.exports = {
  get: (req, res, next) => {
    try {
      return res.send({ message: 'OK' });
    } catch (error) {
      return next(error);
    }
  },

  post: (req, res, next) => {
    try {
      return res.send({ message: 'OK' });
    } catch (error) {
      return next(error);
    }
  }
};
