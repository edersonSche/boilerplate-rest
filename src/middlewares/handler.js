const httpStatus = require('../utils/httpStatus');
const { SERVER_ERROR, NOT_FOUND } = httpStatus;

module.exports = {
  notFound: (req, res) => {
    return res.status(NOT_FOUND.status).send({ message: `${req.method} ${req.path} not found` });
  },

  errors: (error, req, res, next) => {
    function statusWrapper (status) {
      if (!status) {
        status = SERVER_ERROR;
      } else if (typeof status === 'number') {
        status = Object.values(httpStatus).find(value => value.status === status) || SERVER_ERROR;
      }
      return status;
    };

    const { status, message, path } = error;
    const { status: statusCode, message: statusMessage } = statusWrapper(status);

    let msg = message || statusMessage;

    if (statusCode >= 500) {
      console.error(error);
      msg = statusMessage;
    }
    return res.status(statusCode).send({ path, message: msg });
  }
};
