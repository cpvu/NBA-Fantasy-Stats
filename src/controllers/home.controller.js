const path = require('path');

const root = path.join(__dirname, "..", "build")

exports.getHomePage = (_req, res) => {
  res.sendFile(root, "index.html")
};
