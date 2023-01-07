require("dotenv").config();
const path = require("path");

const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const session = require("express-session");


exports.ExpressInstance = async () => {
  const app = express();

  try {

    // app.use(express.static(path.join(__dirname, "build")));
    app.use(cors());
    app.use(morgan("combined"));
    app.use(express.json());

    app.get("/", (_req, res) => {
      res.send("hello")
    })
    return app;
  } catch (e) {
    console.error(e);
    return;
  }
};
