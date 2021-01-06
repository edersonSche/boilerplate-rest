const httpStatus = require('../utils/httpStatus');
const { SERVER_ERROR, NOT_FOUND } = httpStatus;

module.exports = {
  notFoundHandler: (req, res) => {
    return res.status(NOT_FOUND.status).send({ message: `${req.method} ${req.path} not found` });
  },

  errorHandler: (error, req, res, next) => {
    const { status, message, path } = error;

    // errors handles by status code
    if (status) {
      if (typeof status === 'number') {
        const { status: statusCode, message: statusMessage } = Object.values(httpStatus).find(value => value.status === status);
        return res.status(statusCode).send({ path, message: message || statusMessage });
      }
      const { status: statusCode, message: statusMessage } = status;
      return res.status(statusCode).send({ path, message: message || statusMessage });
    }

    // errors not handled
    console.error(error);
    return res.status(SERVER_ERROR.status).send({ message: message || SERVER_ERROR.message });
  }
};
