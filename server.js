const http = require('http');



const harsh = http.createServer((req , rep) => {
  console.log(req.url,req.method,req.headers);
});
const PORT=3000;
harsh.listen(PORT,() => {
console.log('server running on address http://localhost:${PORT}');
});