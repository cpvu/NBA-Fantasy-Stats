const { Router } = require("express");
const { getHomePage, getPlayerStats } = require("../controllers/home.controller");

exports.homeRouter = () => {
  const router = Router();

  router.get("/", getHomePage);
  router.post("/getStats", getPlayerStats);

  return router;
};

