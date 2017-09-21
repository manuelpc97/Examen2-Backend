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
				reply(boom.notAccepted('Wrong username'));
			}else{
				if(user.length > 0){
					bcrypt.compare(request.payload.password, user[0].password, 
						function(err, res){
						if(err){
							reply(boom.unauthorized('Wrong password'));
						}
						if(res){
							//request.cookieAuth.set(user[0]);
							return reply({username: user[0]. username});
						}else{
							reply(boom.unauthorized('Wrong password'));
						}
					});
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