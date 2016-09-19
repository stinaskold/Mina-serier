'use strict';

var express = require('express');
var Serie = require('../models/serie');

var router = express.Router();

// get current series
router.get('/now-series', function(req, res) {
  Serie.find({status: 'Ser nu'}, function(err, nowSeries) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ nowSeries: nowSeries });
  });
});

router.get('/future-series', function(req, res) {
  Serie.find({status: 'Vill se'}, function(err, futureSeries) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ futureSeries: futureSeries });
  });
});

router.get('/past-series', function(req, res) {
  Serie.find({status: 'Har sett'}, function(err, pastSeries) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ pastSeries: pastSeries });
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
