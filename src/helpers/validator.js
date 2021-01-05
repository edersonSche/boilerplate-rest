const { ValidationError, ...yup } = require('yup');

module.exports = ({ body = {}, query = {}, params = {}, stripUnknown = false }) => async (req, res, next) => {
  const configs = { body, query, params };
  let path = '';

  req.dto = { body: {}, query: {}, params: {} };

  try {
    const paths = Object.keys(configs);
    for (const aux of paths) {
      path = aux;
      const shape = configs[path];
      if (shape) {
        const schema = yup.object().shape(shape);
        const validData = await schema.validate(req[path], { abortEarly: false, stripUnknown });
        req.dto[path] = validData;
      }
    }
    return next();
  } catch (error) {
    if (error instanceof ValidationError) {
      const { errors } = error;
      return res.status(400).send({ message: errors });
    }

    return next(error);
  }
};
