var user = require('../schemas/Person');
var joi = require('joi');
var bcrypt = require('bcrypt');
var boom = require('boom');

exports.logIn = {
	auth: false,
	validate : {
		payload: {
			username: joi.string().required(),
			password: joi.string().required()
		}
	}, 
	handler: function(request, reply){
		user.find({username: request.payload.username}, function(err,user){
			if(err){
				return reply('error');
			}else{
				if(request.payload.password === user[0].password){
					return reply({username: user[0].username, idPerson: user[0].idPerson});
				}else{
					return reply('Contraseña erronea');
				}
			}
		});
	}
};

exports.logOut = {
	/*auth: {
		mode: 'required', 
		strategy: 'session'
	},*/
	handler: function(request, reply){
		request.cookieAuth.clear();
		return reply('Log Out');
	}
};