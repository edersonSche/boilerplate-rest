const { getController, postController, putController, deleteController } = require('../../helpers/controler');
const sampleService = require('./sample.service');

module.exports = {
  get: getController((req, res, next) => {
    return { message: 'GET SAMPLE' };
  }),

  post: postController((req, res, next) => {
    const sampleDTO = req.body;
    const data = sampleService.createSample(sampleDTO);
    return { message: 'POST SAMPLE', data };
  }),

  put: putController((req, res, next) => {
    const sampleDTO = req.body;
    const { id } = req.params;
    sampleService.updateSample(sampleDTO, id);
  }),

  delete: deleteController((req, res, next) => {
    const { id } = req.params;
    sampleService.deleteSample(id);
  })

};
