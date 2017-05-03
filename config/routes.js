
var express = require('express');
var app = module.exports = express();
var request = require('request');

app.get('/', function(req,res){
	res.render('homepage.html');
});

app.get('/model/:modelname', function(req, res, next) {
  var modelname = req.params.modelname;
  var UrlRequest = 'http://localhost:3001/model?slug='+modelname;
  console.log(UrlRequest);

  request(UrlRequest, function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }

    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }

    //All is good. 
    var json_rep = JSON.parse(body);

    var slug = json_rep.slug;
    var title = json_rep.title;
    var content = json_rep.content;
	var author = json_rep.author;
	var intro = json_rep.intro;
	var category = json_rep.category
	var youtube = json_rep.youtube;
	var email = json_rep.email;
	var extra = json_rep.extra;
	var other = json_rep.other;//Create extra an other if required



     res.render('model.html', {'content': content, 'title': title, 'author': author, 'intro': intro, 'youtube': youtube, 'category' : category, 'email': email, 'extra': extra, 'other': other});
});
});



