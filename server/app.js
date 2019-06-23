const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 3000;

http
  .createServer((req, res) => {})
  .listen(PORT, "127.0.0.1", () => {
    console.log("nalsuchuje na porcie", PORT);
  });
