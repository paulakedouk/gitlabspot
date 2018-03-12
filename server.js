//step#1
var express = require('express');
var app = express();
//step#2
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var db = require('./models');
//step#3


var port = process.env.PORT || 8080;

//#step#2
//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//step#3
//For Handlebars
// app.set('views', './views');
// app.engine(
//   'hbs',
//   exphbs({
//     extname: '.hbs'
//   })
// );

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');



///////
require('./routes/api-routes.js')(app);
// require('./routes/html-routes.js')(app);

//step#4
//Routes
//we modify the routes import and add passport as an argument
var authRoute = require('./routes/auth.js')(app, passport);
// var routes = require('./routes');


//load passport strategies
require('./config/passport/passport.js')(passport, db.user);


//Sync Database
// models.sequelize
//   .sync()
//   .then(function() {
//     console.log('Nice! Database looks fine');
//   })
//   .catch(function(err) {
//     console.log(err, 'Something went wrong with the Database Update!');
//   });

db.sequelize.sync({ force: true }).then(function () {
  app.listen(port, function () {
    console.log('App listening on PORT ' + port);
  });
});
//step#1 run node serverTest.js
