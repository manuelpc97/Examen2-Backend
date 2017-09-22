var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var elementSchema = new mongoose.Schema({
	idElement: Number,
	nombre: String,
	peso: Number, 
	tipo: String,
	detonado: Boolean,
	lugar: String,
	energia: Number
});
module.exports = mongoose.model('Element', elementSchema);