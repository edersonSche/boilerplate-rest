const yup = require('yup');
const validator = require('../../helpers/validator');

module.exports = {
  get: validator({
    body: {
      test: yup.number().integer().required()
    }
  })
};
