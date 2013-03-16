var ErrorHandling = function(err, req, res, next) {

	this.code = err.code || '500';	
	this.errorTemplate = 'Ocurrio un error hay que renderizar : ' + this.code + '.html';

	res.send(this.errorTemplate + '\n' + err.message + '\n ErrorHandling');
}

module.exports = ErrorHandling;