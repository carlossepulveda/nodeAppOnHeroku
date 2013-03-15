var express = require('express');
var RouterStatics = require('./routers/static/RouterStatics.js');

var port = process.env.PORT || 5000;
var app = express.createServer(express.logger());

var routerStatics = new RouterStatics(app);

app.listen(port, function() {
  console.log("Listening on " + port);
});
