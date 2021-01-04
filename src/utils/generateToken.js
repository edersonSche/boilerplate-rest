const jwt = require('jsonwebtoken');

module.exports = (payload, expiresIn = '24h') => {
  return jwt.sign(payload, process.env.SECRET, { expiresIn });
}
;
