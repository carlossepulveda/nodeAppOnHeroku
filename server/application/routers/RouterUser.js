function RouterUser(app) {
	app.get('/user/:id', function(req, res){
		var id = req.params.id;
		if(id != 621) {
			throw new NotFoundException('lanzar una exception');
		}
		
		res.send('Usuario carlos  :  ' + id);
	});
}

module.exports = RouterUser;