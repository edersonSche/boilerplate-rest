const express = require('express');

const samplePermissions = require('./sample.permissions');
const sampleController = require('./sample.controller');
const sampleValidator = require('./sample.validator');

const router = express.Router();

router.get('/', samplePermissions.get, sampleController.get);
router.post('/', samplePermissions.post, sampleValidator.post, sampleController.post);

module.exports = router;
