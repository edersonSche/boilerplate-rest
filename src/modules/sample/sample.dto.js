const yup = require('yup');

module.exports = {
  post: {
    body: {
      test: yup.number().integer().defined()
    },
    stripUnknown: true
  },

  put: {
    body: {
      test: yup.number().integer().nullable()
    },
    stripUnknown: true
  }
};
