const mongoose = require("mongoose");

const blogschema = new mongoose.Schema({
  title: String,
  content: String,
  author:{type: mongoose.Schema.Types.ObjectId,ref:"user"}
});
module.exports = mongoose.model("Blog",blogschema);
