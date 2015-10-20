// REQUIREMENTS
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    db = require("./models");


// CONFIG
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// DATA

// var test = "Hardcoded Object";
// db.Post.create({text: test});

app.get('/', function (req, res) {
  //look for items in the database to populate the page at start
  db.Post.find({}, function(err, posts){
    console.log(posts);
    res.render('index', {posts: posts});
  });
});

// Is the data connected?
app.get('/api/posts', function (req, res){
	// send posts data as JSON
	res.json(posts);
});

app.post('/api/posts', function(req, res){
  // req.body is .serialized #newBlogPost
	var newPost = req.body;
	console.log(newPost);

  // create new post in Database
  db.Post.create(newPost, function(err, taco){
    res.json(taco);
  });
});


//LISTENING TO A PORT
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server Connected: Listening at http://%s:%s', host, port);
});