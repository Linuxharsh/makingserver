const http = require("http");
const requesthandle = require('./firstproject')

const harsh = http.createServer(requesthandle);




const PORT = 3001;
harsh.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});