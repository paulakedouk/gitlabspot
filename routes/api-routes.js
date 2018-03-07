var db = require("../models");
var path = require("path");

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/cms.html"));
	});

	app.get("/api/:category", function(req, res) {
		res.send("Hit route /" + req.params.category);
	});

	app.post("/api/post", function(req, res) {
		db.Post.create(req.body).then(function(data) {
			res.json(data)
		})
	});
	app.get("/myposts/:id?", function(req, res) {
		if (req.params.id) {
			res.send("Hit route /" + req.params.id);
		}
		else {
			res.send("Hit route /");
		}
	});
	app.delete("/myposts/:id", function(req, res) {

	});
	app.put("/myposts/:id", function(req, res) {

	});
	app.get("/mycomments/:id?", function(req, res) {
		if (req.params.id) {

		}
		else {
			
		}
	})
}