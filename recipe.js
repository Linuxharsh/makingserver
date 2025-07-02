const mongoose = require('mongoose');
const recipeschema = new mongoose.Schema({
  title: String,
  ingredients: [String],
  instructions: String,
  category: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model('recipe', recipeschema);
