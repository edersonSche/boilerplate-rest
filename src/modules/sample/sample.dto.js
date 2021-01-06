const yup = require('yup');

module.exports = {
  post: {
    body: {
      test: yup.number().integer().required()
    },
    stripUnknown: true
  }
};
