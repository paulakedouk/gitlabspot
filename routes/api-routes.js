var db = require('../models');

module.exports = function(app) {
  // Retrieve Posts from database by category
  app.get('/api/category/:category', function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      },
      include: [
        {
          model: db.Comment
        }
      ],
      order: [['updatedAt', 'DESC']]
    }).then(function(data) {
      res.json(data);
    });
  });

  // To get the current users data
  app.get('/api/user/:username', function(req, res) {
    db.user
      .findOne({
        where: {
          username: req.params.username
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });

  // To view a specific post
  app.get('/api/post/:postId', function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.postId
      },
      include: [
        {
          model: db.Comment
        }
      ]
    }).then(function(data) {
      res.json(data);
    });
  });

  // Retrieve all posts from database

  app.get('/all/all', function(req, res) {
    db.Post.findAll({
      include: [
        {
          model: db.Comment
        }
      ],
      order: [['updatedAt', 'DESC']]
    }).then(function(data) {
      res.json(data);
    });
  });

  // Updates the likes to the new value
  app.put('/api/upvote/:postId', function(req, res) {
    db.Post.update(
      {
        likes: req.body.likes
      },
      {
        where: {
          id: req.params.postId
        }
      }
    ).then(function(data) {
      res.json(data);
    });
  });

  // Updates a specific post by id
  app.put('/api/update/post/:id', function(req, res) {
    db.Post.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Updates a specific comment by id
  app.put('/api/update/comment/:id', function(req, res) {
    db.Comment.update(req.body, {
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Creates a post using the information sent
  app.post('/api/create/post', function(req, res) {
    db.Post.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // Creates a comment using the information sent
  app.post('/api/create/comment', function(req, res) {
    db.Comment.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // Brings in all of a Users posts by a given userId
  app.get('/api/myposts/:id', function(req, res) {
    db.Post.findAll({
      where: {
        userId: req.params.id
      },
      include: [
        {
          model: db.Comment
        }
      ],
      order: [['updatedAt', 'DESC']]
    }).then(function(data) {
      res.send(data);
    });
  });

  // Deletes a specifc post by give id
  app.delete('/myposts/delete/:postid', function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.postid
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  //deletes a given comment by id
  app.delete('/mycomments/delete/:commentid', function(req, res) {
    db.Comment.destroy({
      where: {
        id: req.params.commentid
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // Brings in all of a users comments by username with the option to bring in a only one specific comment.
  app.get('/api/mycomments/:id?', function(req, res) {
    if (req.params.id) {
      db.Comment.findOne({
        where: {
          id: req.params.id,
          username: req.body.username
        },
        order: [['updatedAt', 'DESC']]
      });
    } else {
      db.Comment.findAll({
        where: {
          username: req.body.username
        },
        order: [['updatedAt', 'DESC']]
      });
    }
  });
};
