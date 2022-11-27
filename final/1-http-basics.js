const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {"content-type":"text/html"})
    res.write("<h1>home page</h1>");
    res.end();
  }
  else if(req.url === "/about"){
    res.writeHead(200, {"content-type":"text/html"})
    res.write("<h1>about page</h1>");
    res.end();
  }
  else{
    res.writeHead(404, {"content-type":"text/plain"})
    res.write("error page");
    res.end();
  }
});

server.listen(5000);


