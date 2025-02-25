const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getsecretData") {
    res.end("There is no secret data");
  }
  res.end("Welcome to Balkrishna World");
});
server.listen(7000);
