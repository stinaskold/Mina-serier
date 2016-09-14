'use strict';

var mongoose = require('mongoose');

var serieSchema = new mongoose.Schema({
	title: String,
	grade: Number,
	genre: String,
	channel: String,
	status: String
});

var model = mongoose.model('Serie', serieSchema);

module.exports = model;
