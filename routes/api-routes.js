var db = require("../models");


module.exports = function(app) {
	
	app.get("/api/:category", function(req, res) {
		db.Post.findAll({
			where: {
				category: req.params.category
			}, 
<<<<<<< HEAD
			include: [db.User],
=======
			include: [{
					model: db.Comment
				}],
>>>>>>> master
			order: [
				["updatedAt", "DESC"]
			]
		}).then(function(data) {
			res.json(data);
		})
		
	});

<<<<<<< HEAD
	app.get("/all", function(req, res) {
		db.Post.findAll({
			include: [db.User],
=======
	app.get("/all/all", function(req, res) {
		db.Post.findAll({
			include: [{
					model: db.Comment
				}],
>>>>>>> master
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

<<<<<<< HEAD
=======
	app.post("/api/comment", function(req, res) {
		
		db.Comment.create(req.body).then(function(data) {
			res.json(data)
		})
	});

>>>>>>> master
	app.get("/myposts/:id?", function(req, res) {
		if (req.params.id) {
			db.Post.findAll({
				where: {
<<<<<<< HEAD
					UserId: req.params.id
=======
					userId: req.params.id
>>>>>>> master
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