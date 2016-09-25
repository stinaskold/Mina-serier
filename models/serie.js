'use strict';

var mongoose = require('mongoose');

var serieSchema = new mongoose.Schema({
	title: String,
	grade: mongoose.Schema.Types.Mixed,
	genre: String,
	channel: String,
	status: String
});

var model = mongoose.model('Serie', serieSchema);

module.exports = model;
