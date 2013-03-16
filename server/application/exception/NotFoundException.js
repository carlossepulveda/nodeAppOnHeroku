var NotFoundException = function(msj, data) {

	var data = data || {};

    this.name = "NotFound";
    this.code = 404;
    this.message = (msj || 'Recurso no encontrado');
}

NotFoundException.prototype = Error.prototype;

module.exports = NotFoundException;