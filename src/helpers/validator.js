const yup = require('yup');
const { BAD_REQUEST } = require('../utils/httpStatus');

module.exports = ({ body = {}, query = {}, params = {}, stripUnknown = false }) => async (req, res, next) => {
  const configs = { body, query, params };
  let path = '';

  try {
    const paths = Object.keys(configs);
    for (const aux of paths) {
      path = aux;
      const shape = configs[path];
      if (shape) {
        const schema = yup.object().shape(shape);
        const validData = await schema.validate(req[path], { abortEarly: false, stripUnknown });
        req[path] = validData;
      }
    }

    return next();
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const { errors } = error;
      return next({ status: BAD_REQUEST, path, message: errors });
    }

    return next(error);
  }
};
