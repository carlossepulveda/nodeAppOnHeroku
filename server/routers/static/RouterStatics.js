var express = require('express');

function RouterStatics(app) {

	app.use('/static', express.static(__dirname + '/public'));
}

module.exports = RouterStatics;