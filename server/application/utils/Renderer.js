var Renderer = function(){

	this.process = function(path, data) {
		var templateText = Fs.readFileSync(path).toString();
		var templateProcessed = _.template(templateText, {msj : 'recurso no encontrado'});

		return templateProcessed;
	}
}

module.exports = Renderer;