const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;
let linkclicked = 0;
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    console.log(linkclicked);
    switch (req.url) {
      case "/":
        linkclicked++;
        fs.readFile(
          path.join(__dirname, "../public/index.html"),
          (err, page) => {
            if (err) res.end("downloading a file failed", err);
            else res.end(page, linkclicked);
          }
        );
        break;
      case "/piesek":
        linkclicked++;
        fs.readFile(
          path.join(__dirname, "../public/routes/piesek.html"),
          (err, page) => {
            if (err) res.end("downloading a file failed", err);
            else res.end(page);
          }
        );
        break;
      case "/kotek":
        linkclicked++;
        fs.readFile(
          path.join(__dirname, "../public/routes/kotek.html"),
          (err, page) => {
            if (err) res.end("downloading a file failed", err);
            else res.end(page);
          }
        );
        break;
      case "/misiek":
        linkclicked++;
        fs.readFile(
          path.join(__dirname, "../public/routes/misiek.html"),
          (err, page) => {
            console.log(page);
            if (err) res.end("downloading a file failed", err);
            else res.end(page);
          }
        );
        break;

      default:
        break;
    }
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log("nalsuchuje na porcie", PORT);
  });
