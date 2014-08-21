var crypto = require('crypto');
var sha256 = crypto.createHash('sha256').update('Apple').digest("hex");

var User 	  = require('../models/User'),
	AuthToken = require('../models/AuthToken');

exports.socketLogIn = function(data) {
	User.find(data, function(result) {

	});
};

exports.socketSignUp = function(data) {
	
};