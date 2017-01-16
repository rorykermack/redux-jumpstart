var webpack = require('webpack');
var path = require('path');

console.log('===== PRODUCTION SERVER =====');

/* Express */
console.log('Loading Express...');
var app = new require('express')();
var port = 8000;
/* --- Express */


/* This line means that all requests get routed through index.html ensuring smooth hard reloads & 404 directs */
console.log('Configuring server routes...');

app.get('/bundle.js', function (request, response){
  response.sendFile(path.resolve('./dist/bundle.js'))
});

app.get('*', function (request, response){
  response.sendFile(path.resolve('./dist/index.html'))
});

console.log('Starting server...');
app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("Listening on port %s. App Live on port: ", port, port);
  }
});
