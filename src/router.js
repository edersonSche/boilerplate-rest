const express = require('express');

// const authMiddleware = require('./middlewares/auth');
// const paginatorMiddleware = require('./middlewares/paginator');

const samplesRoutes = require('./modules/sample/samples.routes');

const router = express.Router();

// router.use(authMiddleware);
// router.use(paginatorMiddleware);

router.use('/samples', samplesRoutes);

module.exports = router;
