
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');



const authRouter = require('./router/auth');
const blogrouter = require('./router/blog');

const app = express();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected successfully."))
.catch((err)=> console.error("MongoDB connection error:", err));



app.use("/api/auth",authRouter);
app.use("/api/blog",blogrouter);

app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended:true, limit: '10mb'}));

app.get('/', (req, res) => {
  res.send(`<html>
    <head><title>This is my page</title></head>
    <body>
    <h1>Server is running!</h1><p>This is the root page.</p>
    <a href="/api/blog">Go to the blog page</a>
    <br><br>
    <a href="/api/auth">Go to the auth page</a>
    </body>
    </html>
  `);
});


// app.use("/",requesthandler);


app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if(req.method === 'OPTIONS'){
    res.sendStatus(200);
  }else {
    next();
  }
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on a address of http://localhost:${PORT}`);
});
