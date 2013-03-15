var express = require('express');

function RouterStatics(App) {

	app.use(express.static(__dirname + '/client'));
}