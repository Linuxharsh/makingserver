
const harsh = http.createServer((req , rep) => {
  console.log(req.url,req.method,req.headers);
  if(req.url ==='/')
  {
    rep.setHeader('content-type','text/html');
    rep.write('<html>');
    rep.write('<head><title>This is harsh pandey</title></head>');
    rep.write('<body><h1> yo yo bantai rapper</h1></body>');
    rep.write('</html>');
   return req.end();
  }else if(req.url === 'products')
  {
    rep.setHeader('content-type','text/html');
    rep.write('<html>');
    rep.write('<head><title>This is harsh pandey</title></head>');
    rep.write('<body><h1> yo yo bantai rapper</h1></body>');
    rep.write('</html>');
   return req.end();
  }
rep.setHeader('content-type','text/html');
rep.write('<html>');
rep.write('<head><title>This is harsh pandey</title></head>');
rep.write('<body><h1> yo yo bantai rapper</h1></body>');
rep.write('</html>');
return req.end();




});
const PORT = 3000;
harsh.listen(PORT, () => {
  console.log('server is runing at the address http://localhost${PORT}')
})