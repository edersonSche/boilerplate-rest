const express = require('express');

// const authenticator = require('./middlewares/authenticator');
// const paginator = require('./middlewares/paginator');

const sampleModule = require('./modules/sample/sample.module');

const router = express.Router();

// router.use(authenticator);
// router.use(paginator);

router.use('/sample', sampleModule);

module.exports = router;
