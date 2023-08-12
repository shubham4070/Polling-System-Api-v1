const express = require('express');
const router = express.Router();


// connecting with v1 index.js
router.use('/api', require('./api'));
module.exports = router;