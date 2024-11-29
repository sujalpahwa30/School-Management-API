const express = require('express');
const schoolRoutes = require('./school-routes');

const router = express.Router();

router.use('/schools', schoolRoutes);

module.exports = router;
