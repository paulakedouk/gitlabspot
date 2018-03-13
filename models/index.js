'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};

if (process.env.JAWSDB_URL) {

  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  if (process.env.LOCALDB_URL) {
    var sequelize = new Sequelize(process.env.LOCALDB_URL);
  } else {

    if (config.use_env_variable) {
      var sequelize = new Sequelize(process.env[config.use_env_variable], config);
    } else {
      var sequelize = new Sequelize(config.database, config.username, config.password, config);
    }
  }
}

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return file.indexOf('.') !== 0 && file !== 'index.js';
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
