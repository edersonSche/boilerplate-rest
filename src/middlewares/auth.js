const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization || '';

  try {
    const validData = jwt.verify(token, process.env.SECRET);

    return next();
  } catch (error) {
    return next({ status: 401, message: 'Invalid token' });
  }
};
