module.exports = {
  notFound: (req, res) => res.status(404).send({ message: `${req.method} ${req.path} not found` }),

  error: (error, req, res, next) => {
    const { status, message } = error;

    // errors handles by status code
    if (status) {
      let statusMessage = '';
      if (status === 400) {
        statusMessage = 'Bad request';
      } else if (status === 401) {
        statusMessage = 'Unauthorized';
      } else if (status === 403) {
        statusMessage = 'Access denied';
      }

      return res.status(status).send({ message: message || statusMessage });
    }

    // errors not handled
    console.error(error);
    return res.status(500).send({ message: 'Internal server error' });
  }
};
