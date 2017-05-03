var http = require('http');
var express = require('express');
var app = module.exports = express();
var mustacheExpress = require('mustache-express');

app.server = http.createServer(app);


app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use('/static', express.static(__dirname + '/static'));


/** SPECIFIED MODULES  **/

var routes = require('./config/routes.js');
var environment = require('./config/environment.js');
var tools = require('./config/tools.js');
var models = require('./lib/posts/models.js');

app.use(tools.logger);
app.use(environment);
app.use(routes);
app.use(models);


/** START SERVER **/

var server = app.listen(process.env.port||3000, function () {
var port = server.address().port;
console.log("The server is now listening on http://localhost/" + port);
});