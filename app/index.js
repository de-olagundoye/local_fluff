var express = require('express');
var app = express();
var solar = require ('./db/solar_system.json');

app.set ('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/solar', function(req, res) {
  res.json(solar);
  res.redirect('/');
})

app.get('/calculator', function(req, res) {
  res.render('calculator');
})

app.get('/test', function(req, res) {
  res.render('test');
})


app.listen(process.env.PORT || 9292);