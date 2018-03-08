var db = require("../models");


module.exports = function(app) {
	
	app.get("/api/:category", function(req, res) {
		db.Post.findAll({
			where: {
				category: req.params.category
			}, 
			include: [db.User],
			order: [
				["updatedAt", "DESC"]
			]
		}).then(function(data) {
			res.json(data);
		})
		
	});

	app.get("/all", function(req, res) {
		db.Post.findAll({
			include: [db.User],
		}).then(function(data) {
			res.json(data)
		})
	});

	app.put("/upvote/:id", function(req, res) {
		db.Post.update({
			likes: req.body.likes
		},{
			where: {
				id: req.params.id
			}
		}).then(function(data) {
			res.json(data);
		})
	});

	app.put("/post/:id", function(req, res) {
		db.Post.update(req.body, {
			where: {
				id: req.params.id
			}
		}).then(function(data) {
			res.json(data);
		})
	});

	app.post("/api/post", function(req, res) {
		db.Post.create(req.body).then(function(data) {
			res.json(data)
		})
	});

	app.get("/myposts/:id?", function(req, res) {
		if (req.params.id) {
			db.Post.findAll({
				where: {
					UserId: req.params.id
				},
				include: [{
					model: db.Post
				},{
					model: db.Comment
				}],
				order: [
					['updatedAt', 'DESC']
				]
			}).then(function(data) {
			res.send(data);
		})
		}
		else {
			// If user has no posts
			res.send("Hit route /");
		}
	});

	app.delete("/myposts/:id", function(req, res) {
		db.Post.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(data) {
			res.json(data);
		})
	});

	app.get("/mycomments/:id?", function(req, res) {
		if (req.params.id) {

		}
		else {
			
		}
	});
}