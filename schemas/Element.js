var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var elementSchema = new mongoose.Schema({
	idElement: Number,
	name: String,
	description: String, 
	image: String,
	list: [Number]
});
module.exports = mongoose.model('Element', elementSchema);