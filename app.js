var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Aplicacion corriendo en el puerto 5000');
});

app.get('/login', function(request, response) {
  response.send('pagina de login');
});

app.get('/logout', function(request, response) {
  response.send('pagina de logout');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
