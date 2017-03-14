
var express = require('express');
var app = module.exports = express();
var mustacheExpress = require('mustache-express');

app.engine('html', mustacheExpress());
app.set('view engine', 'mustache');

// Setp /views as path to host html views
app.set('views', __dirname + '../../views');

// Set up /static path to host css/js/image files directly
app.use('/static', express.static(__dirname + '../../static'));


app.get('/page1', function(req,res){
	res.render('views');
});

app.get('/page2', function(req,res){
	res.render('view2');
});

