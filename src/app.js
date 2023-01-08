require("dotenv").config();
const path = require("path");

const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const root = path.join(__dirname, "..", "src", "build");

const { homeRouter, apiRouter } = require("./routes");

exports.ExpressInstance = async () => {
  const app = express();

  try {

    app.use(express.static(root));
    app.use(cors());
    app.use(morgan("combined"));
    app.use(express.json());

    app.use("/", homeRouter());
    app.use("/api", apiRouter());

    return app;
  } catch (e) {
    console.error(e);
    return;
  }
};
