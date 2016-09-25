'use strict';

var express = require('express');
var Serie = require('../models/serie');

var router = express.Router();

// get series
router.get('/get-series', function(req, res) {
  Serie.find({}, function(err, series) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ series: series });
  });
});

// add new series
router.post('/series', function(req, res) {
  var new_series = req.body;
  Serie.create(new_series, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'series': new_series, message: 'Series added to db' });
  });
});

// update series
router.put('/series/:id', function(req, res) {
  var id = req.params.id;
  var series = req.body;
  if (series && series._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }
  Serie.findByIdAndUpdate(id, series, {new: true}, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'series': series, message: 'Series updated' });
  });
});

// delete series
router.delete('/series/:id', function(req, res) {
  var id = req.params.id;
  Serie.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Series deleted' });
  });
});

module.exports = router;
