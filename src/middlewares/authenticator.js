const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('../utils/httpStatus');

module.exports = (req, res, next) => {
  const token = req.headers.authorization || '';

  try {
    const validData = jwt.verify(token, process.env.SECRET);

    return next();
  } catch (error) {
    return next({ status: UNAUTHORIZED, message: 'Invalid token' });
  }
};
