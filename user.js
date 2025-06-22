const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username:String,
  password:String,
  role:{type:String,default:"user"}
});

module.exports = mongoose.model("user",userschema);