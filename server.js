// REQUIREMENTS
var express = require('express');
var app = express();

// CONFIG
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));

// DATA
app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index');
});

//LISTENING TO A PORT
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server Connected: Listening at http://%s:%s', host, port);
});