var authController = require('../controllers/authcontroller.js');
//added require passport(not in tutorial)
var passport = require('passport');
//added passport to the parameter(not in tutorial)

module.exports = function (app) {
  // app.get('/signup', authController.signup);
  // app.get('/signin', authController.signin);
  // // app.get('/dashboard', isLoggedIn, authController.dashboard);
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
    res.render("dashboard", {user: req.user})
  })

  app.get("/create-post", isLoggedIn, function (req, res) {
    res.render("create-post")
  })

  app.get("/category/:week/:subject", function (req, res) {
    var props = {
      week: req.params.week,
      subject: req.params.subject
    }
    app.get("/api/category/" + props.subject, function(data) {
    	res.render("category", { posts: data })	
    })
  })

  app.get("/category/:week/:subject/:post", function (req, res) {
    var page = `${req.params.week}${req.params.subject}${req.params.post}`
    res.render(page)
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
    res.render("create-post")
  })
};



