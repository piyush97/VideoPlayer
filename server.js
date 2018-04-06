const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/routes/api');
const port = 3000;
const app = express();
app.use(express.static(path.join(_dirname, 'dist')));
