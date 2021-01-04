const yup = require('yup');
const validator = require('../helpers/validator');

module.exports = validator({
  query: {
    page: yup.number().integer().min(1).default(1),
    pageSize: yup.number().integer().min(1).max(50).default(25)
  }
});
