var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/w3-lab");

module.exports.Post = require("./post.js");
