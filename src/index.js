require("dotenv").config();
const http = require('http');

const { ExpressInstance } = require('./app.js');

(async () => {
  const server = http.createServer(await ExpressInstance());
  const address = process.env.ADDRESS || "0.0.0.0";
  const port = process.env.PORT || 8000;
  server.listen(port, address, err => {
    if (err) return console.error(err);

    console.log(`Server started on ${address}:${port}`);

    return;
  });
})();
