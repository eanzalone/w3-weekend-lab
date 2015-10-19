// REQUIREMENTS
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser");

// CONFIG
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// DATA

var posts = [
	{id: 0, text: "Hardcoded Object"},
	{id: 1, text: "Item 2"}
];

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index');
});

// Is the data connected?
app.get('/api/posts', function (req, res){
	// send posts data as JSON
	res.json(posts);
});

app.post('/api/posts', function(req, res){
	var newFood = req.body;
	console.log(newFood);
});

//LISTENING TO A PORT
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server Connected: Listening at http://%s:%s', host, port);
});