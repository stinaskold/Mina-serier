'use strict';

var mongoose = require('mongoose');

// Create schema for series
var serieSchema = new mongoose.Schema({
	title: String,
	grade: mongoose.Schema.Types.Mixed,
	genre: String,
	channel: String,
	status: String
});

// Create model
var model = mongoose.model('Serie', serieSchema);

module.exports = model;
