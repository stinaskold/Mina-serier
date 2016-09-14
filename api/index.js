'use strict';

var express = require('express');
var Serie = require('../models/serie');

var router = express.Router();

// get series
router.get('/series', function(req, res) {
  Serie.find({}, function(err, series) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ series: series });
  });
});

module.exports = router;
