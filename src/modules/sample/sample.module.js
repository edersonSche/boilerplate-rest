const express = require('express');

const authorizer = require('../../helpers/authorizer');
const validator = require('../../helpers/validator');

const sampleController = require('./sample.controller');
const sampleDTO = require('./sample.dto');

const router = express.Router();

router.get('/', authorizer({ permission: 'GET_SAMPLE' }), sampleController.get);
router.post('/', authorizer({ permission: 'POST_SAMPLE' }), validator(sampleDTO.post), sampleController.post);
router.put('/', authorizer({ permission: 'PUT_SAMPLE' }), validator(sampleDTO.put), sampleController.put);
router.delete('/', authorizer({ permission: 'DELETE_SAMPLE' }), sampleController.delete);

module.exports = router;
