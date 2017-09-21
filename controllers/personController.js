var person = require('../schemas/Person');
var boom = require('boom');
var bcrypt = require('bcrypt');

exports.createPerson = {
	handler: function(request, reply){
			console.log('Aqui');
			bcrypt.hash(request.payload.password, 10, function (err, hash) {
			if (err)
				return reply(boom.notAcceptable('Error encrypting password'));
			var verifyUsername = request.payload.username;
			var unique = true;

			person.find({}, 'idPerson username', function (err, IDP) {
				if (!err) {
					var ID = 0;
					for (var i = 0; i < IDP.length; i++) {
						if (verifyUsername === IDP[i].username) {
							unique = false;
						}
					}
					if (IDP[0] === undefined) {
						ID = 1;
					} else {
						ID = IDP[0].IDPerson + 1;
					}
					var newPerson = new person({
						idPerson: ID,
						name: request.payload.name,
						age: request.payload.age,
						email: request.payload.email,
						address: request.payload.address,
						phone: request.payload.phone,
						image: request.payload.image,
						username: request.payload.username,
						password: hash,
						friends: request.payload.friends
					});

					if (unique) {
						newPerson.save();
						reply('Person saved');
					} else {
						reply('Not unique');
					}
				} else {
					reply('Error');
				}
			}).sort({ _id: -1 });
		});
	}
};

exports.updatePerson = {
	handler: function(request,reply){
		var toBeUpdated = person.find({idPerson: request.params.id});
		toBeUpdated.update({$set: request.payload}, function(err){
			if(err){
				reply(err);
			}else{
				reply('Person updated');
			}
		});
	}
};

exports.deletePerson = {
	handler: function(request, reply){
		var toBeDeleted = person.find({idPerson: request.params.id});
		toBeDeleted.remove(function(err){
			if(err){
				reply(err);
			}else{
				reply('Person deleted');
			}
		});
	}
};

exports.getPeople = {
	handler: function(request,reply){
		var people = person.find({});
		return reply(people);
	}
};

exports.getPersonById = {
	handler: function(request, reply){
		var personById = person.find({idPerson: request.params.id});
		return reply(personById);
	}
};

exports.getPersonByName = {
	handler: function(request, reply){
		var personByName = person.find({name: request.params.name});
		return reply(personByName);
	}
};