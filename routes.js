var personController = require('./controllers/personController.js');
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
		path: '/ux/PersonByName', 
		config: personController.getPersonByName
	}
]