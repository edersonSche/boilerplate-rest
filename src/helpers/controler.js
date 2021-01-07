module.exports.getController = (callback = (req, res, next) => {}) =>
  async (req, res, next) => {
    try {
      const data = await callback(req, res, next);
      return res.status(200).send(data);
    } catch (error) {
      return next(error);
    }
  };

module.exports.postController = (callback = (req, res, next) => {}) =>
  async (req, res, next) => {
    try {
      const data = await callback(req, res, next);
      return res.status(201).send(data);
    } catch (error) {
      return next(error);
    }
  };

module.exports.putController = (callback = (req, res, next) => {}) =>
  async (req, res, next) => {
    try {
      const data = await callback(req, res, next);
      return res.status(data ? 200 : 204).send(data);
    } catch (error) {
      return next(error);
    }
  };

module.exports.deleteController = (callback = (req, res, next) => {}) =>
  async (req, res, next) => {
    try {
      const data = await callback(req, res, next);
      return res.status(data ? 200 : 204).send(data);
    } catch (error) {
      return next(error);
    }
  };
