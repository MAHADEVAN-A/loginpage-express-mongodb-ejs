var mongoose = require('mongoose');

var Form = new mongoose.Schema({
  name: String,
  password: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', Form);
