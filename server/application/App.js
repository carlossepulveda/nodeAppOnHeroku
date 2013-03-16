var App = function() {

	this.app = Express.createServer(Express.logger());

	this.start = function(port) {

		var appConfigurator = new ExpressConfigurator();

		appConfigurator.configure(this.app);

		new RouterUser(this.app);

		this.app.listen(port);
	}
}

module.exports = App;