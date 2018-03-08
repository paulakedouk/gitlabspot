var db = require("../models");
var path = require("path");

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/cms.html"));
	});
	app.get("/week-1", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-1.html"));
	});
	app.get("/week-2", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-2.html"));
	});
	app.get("/week-3", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-3.html"));
	});
	app.get("/week-4", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-4.html"));
	});
	app.get("/week-5", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-5.html"));
	});
	app.get("/week-6", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-6.html"));
	});
	app.get("/week-7", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-7.html"));
	});
	app.get("/week-8", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-8.html"));
	});
	app.get("/week-9", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-9.html"));
	});
	app.get("/week-10", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-10.html"));
	});
	app.get("/week-11", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-11.html"));
	});
	app.get("/week-12", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-12.html"));
	});
	app.get("/week-13", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/week-13.html"));
	});

}