const http = require('http');

//const server = require('./handling');

const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
  console.log("This is home page", req.url, req.method);
  res.send("<h1>Harsh pandey</h1>");

});
app.get("/contact-us", (req, res, next) => {
  console.log("This is second page", req.url, req.method);
  res.send(`
    <h1>Submit your details</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name"/>
      <input type="email" name="email" placeholder="Enter your email"/>
      <input type="Submit"/>
    </form>
  `);
});
app.post("/contact-us",(req, res , next)=> {
  console.log("thank you ",req.url,req.method);
  res.send("<h1>We will contact us early </h1>");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
