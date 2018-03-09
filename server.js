//step#1
var express = require('express');
var app = express();
//step#2
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
//step#3
var exphbs = require('express-handlebars');

var port = process.env.PORT || 8080;

//#step#2
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//step#3
//For Handlebars
app.set('views', './views');
app.engine(
  'hbs',
  exphbs({
    extname: '.hbs'
  })
);
app.set('view engine', '.hbs');

///////
app.get('/', function(req, res) {
  res.send('Welcome to Passport with Sequelize');
});
//Step#1
//Next, we call the app.get() express routing function to respond with "Welcome to Passport with Sequelize" when a GET request is made to "/".

//step#3
//Models
var models = require('./models');

//step#4
//Routes
var authRoute = require('./routes/auth.js')(app);
//we modify the routes import and add passport as an argument
var authRoute = require('./routes/auth.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

//Sync Database
models.sequelize
  .sync()
  .then(function() {
    console.log('Nice! Database looks fine');
  })
  .catch(function(err) {
    console.log(err, 'Something went wrong with the Database Update!');
  });

//step#1
app.listen(port, () => console.log(`Listening on port ${port}`));

//step#1 run node serverTest.js
