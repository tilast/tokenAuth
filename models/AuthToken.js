var mongoose = require('mongoose');

var User = require('./User');

var authTokenSchema = new mongoose.Schema({
  token: String,
  expires: Date,
  user: { type : mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('AuthToken', authTokenSchema);
