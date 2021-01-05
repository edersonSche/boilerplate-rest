const yup = require('yup');
const validator = require('../../helpers/validator');

module.exports = {
  post: validator({
    body: {
      test: yup.number().integer().required()
    }
  })
};
