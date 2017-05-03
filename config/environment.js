var express = require('express');
var app = module.exports = express();
var engine = require('consolidate');
var mustacheExpress = require('mustache-express');
var path = require ('path');
var bodyParser = require('body-parser'); // Parser to gain access to request body
var request = require('request');

console.log('test environment');

app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded 
app.use(bodyParser.json()); // support json encoded bodies
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



