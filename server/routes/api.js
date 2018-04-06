const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../models/video');
const db = "mongodb://piyush:1234@ds237409.mlab.com:37409/videoplayer";
mongoose.Promise = global.Promise;
mongoose.connect(db,function(err){
  if(err){
    console.error("Error!"+err);
  }
});

router.get('/', function(req, req) {
  res.send('API WORKS!!!');
});
module.exports = router;
