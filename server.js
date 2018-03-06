// Dependencies

var express = require("express");
var bodyParser = require("body-parser");

// Setting up Express App

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

require("./routes/api-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
	app.listen(PORT, function() {
		console.log("The server is listening on port " + PORT);
	})
})

