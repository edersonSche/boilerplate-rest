const httpStatus = require('./utils/httpStatus');

module.exports = {
  notFound: (req, res) => res.status(404).send({ message: `${req.method} ${req.path} not found` }),

  error: (error, req, res, next) => {
    const { status, message, path } = error;

    // errors handles by status code
    if (status) {
      const { status: statusCode, message: statusMessage } = httpStatus[status];
      return res.status(statusCode).send({ path, message: message || statusMessage });
    }

    // errors not handled
    console.error(error);
    const { status: serverCode, message: serverMessage } = httpStatus.SERVER_ERROR;
    return res.status(serverCode).send({ message: serverMessage });
  }
};
