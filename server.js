var express = require('express');
// var nodemailer = require("nodemailer");
var fs = require('fs');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var jade = require('jade');
// var mandrillApi = JSON.parse(fs.readFileSync('private/apikey.json','utf8'));
var app = express();

app.set('view engine', 'jade');

app.use(
 sassMiddleware({
     src: __dirname + '/sass',
     dest: __dirname + '/public/css',
     prefix:  '/css',
//     outputStyle: 'compressed',
     debug: true
 })
);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(8080,function(){
	console.log("Express started on port 8080");
});
