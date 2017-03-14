/** var express = require('express');
var app = module.exports = express();
var engine = require('consolidate');
var mustacheExpress = require('mustache-express');
var path = require ('path');

console.log('test');

app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');


//app.engine('html', mustacheExpress());
//app.set('view engine', 'mustache');


// Setp /views as path to host html views
//app.set('views','/../views');
//app.set('views', __dirname + '/../views');

// Set up /static path to host css/js/image files directly
app.use('/static', express.static(__dirname + '/static'));
//app.use(express.static(path.join(__dirname + './static')));

**/

var http = require('http');
var express = require('express');

var app = module.exports = express();

app.server = http.createServer(app);



var engine = require('consolidate');
var mustacheExpress = require('mustache-express');
var path = require ('path');

console.log('test');

app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

/**
app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
**/

// Setp /views as path to host html views
//app.set('views','/../views');
//app.set('views', __dirname + '/../views');

// Set up /static path to host css/js/image files directly
app.use('/static', express.static(__dirname + '/static'));
//app.use(express.static(path.join(__dirname + './static')));



