const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../../../webpack.dev.config');
const path = require('path');
const https = require('https');
const http = require('http');
const fs = require('fs');
const log = require('./log');

console.log('===== DEV SERVER (HMR) =====');

/* Express */
console.log('Loading Express...');
const express = require('express');
const httpPort = 7000;
const httpsPort = 8000;
/* --- Express */

/* Config */
const paramArray = (process.argv[2]) ? process.argv[2].split("=") : [];
const isHttps = (paramArray[0] === 'https') ? paramArray[1] : false;
const serverType = (isHttps) ?  'https' : 'http';

/* Local, fake certs for https */
const httpsCerts = {
   key: fs.readFileSync('key.pem'),
   cert: fs.readFileSync('cert.pem')
};


/* Config */
const app = express();

/* Webpack Dev Middleware */
console.log('Configuring webpack Dev & Hot Middleware...');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));
/* --- Webpack Dev Middleware */

/* This line means that all requests get routed through index.html ensuring smooth hard reloads */
console.log('Configuring server routes...');
app.get('*', function (request, response){
  response.sendFile(path.resolve('./src/browser/index.html'))
});

console.log('Starting {{' + serverType + '}} server...');
console.log('Building Webpack...');
if (isHttps) {
  // Create a https server
  https.createServer(httpsCerts, app).listen(httpsPort, function(err) {
    if(err) {
      console.log('error:', err);
    } else {
      console.log('Secure Server Listening at https://localhost:%s', httpsPort);
    }
  });
  // Create http server that redirects to https sever
  // http.createServer(function (req, res) {
  //   console.log('hello')
  //     res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
  //     res.end();
  // }).listen(httpPort, function(err) {
  //   if(err) {
  //     console.log('error:', err);
  //     return;
  //   }
  //   console.log('http => https redirect enabled');
  // })
  // var httpApp = express();
  // var httpRouter = express.Router();
  // httpApp.use('*', httpRouter);
  // httpRouter.get('*', function(req, res){
  //     var host = req.get('Host');
  //     // replace the port in the host
  //     host = host.replace(/:\d+$/, ":"+app.get('port'));
  //     // determine the redirect destination
  //     var destination = ['https://', host, req.url].join('');
  //     return res.redirect(destination);
  // });
  // var httpServer = http.createServer(httpApp);
  // httpServer.listen(8080);
  // app.use(function(req,res,next) {
  // if (!/https/.test(req.protocol)){
  //    res.redirect("https://" + req.headers.host + req.url);
  // } else {
  //    return next();
  // }
  // });
} else {
  // create simple http server
  app.listen(httpPort, function(error) {
    if (error) {
      console.error(error);
    } else {
      console.log('Server Listening at http://localhost:%s', httpPort);
    }
  });
}
