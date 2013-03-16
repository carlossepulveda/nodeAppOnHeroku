var ExpressConfigurator = function() {

	var renderer = new Renderer();

	this.configure = function(app) {
		
		app.use(Express.bodyParser());
		app.use(Express.methodOverride());
		app.use(app.router);
		//static file like javascripts, css, images
		app.use(Express.static(_dirClient));

		app.get('/', function(req, res){
			res.redirect('/index.html');
		});

		//Exception listener
		app.use(ExceptionHandling);

		//on 404 error
		app.use(function(req,res){
		   var txt = renderer.process(_dirTemplates + '/errors/404.tpl', {msj : ''})
		   res.status(404).send(txt);
		});

		//on 500 error
		app.use(function(err, req, res, next){
		  var txt = renderer.process(_dirTemplates + '/errors/500.tpl', {msj : ''})
		  res.status(404).send(txt);
		});
	}
	
}

module.exports = ExpressConfigurator;