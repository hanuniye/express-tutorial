const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./profile-app/index.html");
const style = readFileSync("./profile-app/style.css");
const appJs = readFileSync("./profile-app/app.js");
const images = readFileSync("./profile-app/aniga.jpg");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {"content-type":"text/html"})
    res.write(homePage);
    res.end();
  }
  // style 
  else if(req.url === "/style.css"){
    res.writeHead(200, {"content-type":"text/css"})
    res.write(style);
    res.end();
  }
  // images 
  else if(req.url === "/aniga.jpg"){
    res.writeHead(200, {"content-type":"images/jpg"})
    res.write(images);
    res.end();
  }
  // app.js 
  else if(req.url === "/app.js"){
    res.writeHead(200, {"content-type":"text/javascript"})
    res.write(appJs);
    res.end();
  }
  else{
    res.writeHead(200, {"content-type":"text/plain"})
    res.write("error page");
    res.end();
  }
});

server.listen(5000);
