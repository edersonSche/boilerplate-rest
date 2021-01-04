const yup = require('yup');

module.exports = ({ body = {}, query = {}, stripUnknown = false }) => async (req, res, next) => {
  const configs = { body, query };
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
    const { errors } = error;
    return res.status(400).send({ path, message: errors });
  }
};
