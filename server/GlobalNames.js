//Enabled the app global names

	_dirClient = __dirname + '/../client';
	_dirTemplates = __dirname + '/templates';

	App = require('./application/App.js');	
	_ = require('underscore');
	ExceptionHandling = require('./application/exception/ExceptionHandling.js');
	Express = require('express');
	ExpressConfigurator = require('./application/ExpressConfigurator.js');
	Fs = require('fs');
	NotFoundException = require('./application/exception/NotFoundException.js');
	Renderer = require('./application/utils/Renderer.js');
	RouterUser = require('./application/routers/RouterUser.js');