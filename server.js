const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const reciperouter = require('./router/routing');
const { connected } = require('process');
const { error } = require('console');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_url)
.then(()=> console.log('mongo is connected'))
.catch((error)=> console.log("Db error",error));

app.get('/',(req,res)=> {
  res.send('recipe api is running');

});
app.use('/', reciperouter);
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server is running on a address http://localhost:${PORT}`);
});