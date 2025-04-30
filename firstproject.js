
const fs = require("fs");

const importrequesthandle = ((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Testing</title></head>");
    res.write("<body><h1>Enter Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female" />');
    res.write('<br><input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);

      // Write data to file
      fs.writeFileSync("user.txt", fullbody);

      // Redirect user to homepage
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });

  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body><h1>Like / Share / Subscribe</h1></body>");
    res.write("</html>");
    res.end();
  }
});
module.exports = importrequesthandle;