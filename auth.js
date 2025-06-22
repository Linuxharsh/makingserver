const express = require('express');
const auth = express.Router();

auth.get('/',(req,res)=> {
  res.send('This is auth router');
});

// Add your auth routes here

module.exports = auth;