const express = require('express');

const authorizer = require('../../helpers/authorizer');
const validator = require('../../helpers/validator');

const sampleController = require('./sample.controller');
const sampleDto = require('./sample.dto');

const router = express.Router();

router.get('/', authorizer({ permission: 'GET_SAMPLE' }), sampleController.get);
router.post('/', authorizer({ permission: 'POST_SAMPLE' }), validator(sampleDto.post), sampleController.post);

module.exports = router;
