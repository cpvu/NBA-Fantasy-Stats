require("dotenv").config();
const path = require("path");

const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const session = require("express-session");

const root = path.join(__dirname, "..", "src", "build");


const { homeRouter } = require("./routes");

exports.ExpressInstance = async () => {
  const app = express();

  try {

    app.use(express.static(root));
    app.use(cors());
    app.use(morgan("combined"));
    app.use(express.json());

    app.use("/", homeRouter());

    return app;
  } catch (e) {
    console.error(e);
    return;
  }
};
