const http = require('http'), fs = require('fs'), path = require('path');
http.createServer((req, res) => {
  const f = path.join(__dirname, 'index.html');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  fs.createReadStream(f).pipe(res);
}).listen(5180);
