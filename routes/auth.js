var authController = require('../controllers/authcontroller.js');
//added require passport(not in tutorial)
var passport = require('passport');
//added passport to the parameter(not in tutorial)

module.exports = function (app) {
  app.get('/logout', authController.logout);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/signin');
  }

  app.get("/signin", function (req, res) {
    res.render("signin")
  })

  app.get("/signup", function (req, res) {
    res.render("signup")
  })

  app.get("/dashboard", isLoggedIn, function (req, res) {
    res.render("dashboard", { user: req.user })
  })

  app.get("/category/:week/:subject", function (req, res) {
    var props = {
      week: req.params.week,
      subject: req.params.subject,
      user: req.user
    }
    app.get("/api/category/" + props.subject, function(data) {
    	res.render("category", { posts: data })	
    })
  })

  app.get("/category/:week/:subject/:post", function (req, res) {
    var page = `${req.params.week}${req.params.subject}${req.params.post}`
    var props = {
      title: req.title,
      body: req.body,
      category: req.category,
      username: req.user
    }

    res.render(page, props)
  })

  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/dashboard',

      failureRedirect: '/signup'
    })
  );

  app.post(
    '/signin',
    passport.authenticate('local-signin', {
      successRedirect: '/dashboard',

      failureRedirect: '/signin'
    })
  );

  app.get("/create-post", isLoggedIn, function (req, res) {
    var props = {
      user: req.user,
      // post: res.query
    }
    // console.log(res)
    res.render("create-post", props)
  })
};



