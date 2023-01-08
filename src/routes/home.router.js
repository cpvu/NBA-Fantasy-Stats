const { Router } = require("express");
const { getHomePage } = require("../controllers/home.controller");

exports.homeRouter = () => {
  const router = Router();

  router.get("/", getHomePage);
  return router;
};

