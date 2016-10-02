'use strict';

var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/myseries', function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});
