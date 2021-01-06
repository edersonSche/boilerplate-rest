const sampleService = require('./sample.service');

module.exports = {
  get: (req, res, next) => {
    try {
      return res.send({ message: 'GET SAMPLE' });
    } catch (error) {
      return next(error);
    }
  },

  post: (req, res, next) => {
    try {
      const sampleDTO = req.body;
      const data = sampleService.createSample(sampleDTO);
      return res.status(201).send({ message: 'POST SAMPLE', data });
    } catch (error) {
      return next(error);
    }
  }
};
