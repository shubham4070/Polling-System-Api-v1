const express = require('express');
const router = express.Router();


// connecting with v1 index.js
router.use('/v1', require('./v1'));
module.exports = router;