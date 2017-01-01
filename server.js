'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongoose = require('mongoose');

var app = express();
//var uri = 'mongodb://testuser:testpassword@ds151078.mlab.com:51078/heroku_h4h7rgj4';
mongoose.connect('mongodb://localhost:27017/clementinejs');

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

var port = 8080;
app.listen(port, function () {
    console.log('Node.js listening on port ' + port + '...');
});