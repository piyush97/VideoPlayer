const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/', function(req, req) {
  res.send('API WORKS!!!');
})
module.exports = router;
