var authController = require('../controllers/authcontroller.js');
//added require passport(not in tutorial)
var passport = require('passport');
//added passport to the parameter(not in tutorial)

module.exports = function (app) {
  // app.get('/signup', authController.signup);
  // app.get('/signin', authController.signin);
  // // app.get('/dashboard', isLoggedIn, authController.dashboard);
  // app.get('/logout', authController.logout);

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
    res.render("dashboard")
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
};
