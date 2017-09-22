var element = require('../schemas/Element.js');

exports.createElement = {
	handler: function(request,reply){
		element.find({}, 'idElement', function (err, IDP) {
				var ID = 0;
				if (IDP[0] === undefined) {
					ID = 1;
				} else {
					ID = IDP[0].idElement + 1;
				}
				var newElement = new element({
					idElement: ID,
					nombre: request.payload.nombre,
					peso: request.payload.peso,
					tipo: request.payload.tipo,
					detonada: request.payload.detonada,
					lugar: request.payload.lugar,
					energia: request.payload.energia
				});
				newElement.save();
				return reply('Element added');
			}).sort({ _id: -1 });
	}
};

exports.updateElement = {
	handler: function(request, reply){
		var toBeUpdated = element.find({idElement: request.params.id});
		toBeUpdated.update({$set: request.payload}, function(err){
			if(err){
				return reply('Error');
			}else{
				return reply('Element updated');
			}
		});
	}
}; 
exports.getElements = {
	handler: function(request, reply){
		var elements = element.find({});
		return reply(elements);
	}
};
exports.deleteElement = {
	handler: function(request, reply){
		var toBeDeleted = element.find({idElement: request.params.id});
		toBeDeleted.remove(function(err){
			if(err){
				return reply(err);
			}else{
				return reply('Element deleted');
			}
		});
	}
};