//Variables

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;

//Body Parser
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Friends Data

// var friends = require('./app/data/friends.js');

// console.log(friends); 


//Routes

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app, path);


//Port Listening

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

