var personController = require('./controllers/personController.js');
var authController = require('./controllers/authController.js');

exports.endpoints = [
	{
		method: 'GET',
		path: '/',
		config: { handler: function (request, reply) { reply('API ux, Examen2 Manuel Padilla') } }
	},
	{
		method: 'POST',  
		path: '/ux/Person',
		config: personController.createPerson
	},
	{
		method: 'PUT', 
		path: '/ux/Person/{id}', 
		config: personController.updatePerson
	},
	{
		method: 'DELETE', 
		path: '/ux/Person/{id}', 
		config: personController.deletePerson
	},
	{
		method: 'GET', 
		path: '/ux/People', 
		config: personController.getPeople
	}, 
	{
		method: 'GET', 
		path: '/ux/PersonById/{id}', 
		config: personController.getPersonById
	},
	{
		method: 'GET', 
		path: '/ux/PersonByName/{name}', 
		config: personController.getPersonByName
	},
	{
		method: 'PUT', 
		path: '/ux/addFriend/{id}', 
		config: personController.addFriend
	},
	{
		method: 'PUT', 
		path: '/ux/deleteFriend/{id}', 
		config: personController.deleteFriend
	},
	{
		method: 'POST', 
		path: '/ux/login', 
		config: authController.logIn
	},
	{
		method: 'GET', 
		path: '/ux/logout', 
		config: authController.logOut
	}
]