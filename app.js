'use strict';

var express = require('express');
var parser = require('body-parser');
var router = require('./api');

// Set up Express app
var app = express();

require('./database');

// Use static files in 'public' folder
app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});
