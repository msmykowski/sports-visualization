require('./env');
const api = require('./api_router');
const express = require('express');
const path = require('path');

const app = express();
app.use('/api', api(app));
app.use(express.static(path.join(__dirname, '..', 'public')));

module.exports = app;
