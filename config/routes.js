
var express = require('express');
var app = module.exports = express();

app.get('/', function(req,res){
	res.render('Newhomepage.html');
});

app.get('/page1', function(req,res){
	res.render('page1.html');
});

app.get('/page2', function(req,res){
	res.render('page2.html');
});


