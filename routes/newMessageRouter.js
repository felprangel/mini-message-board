const { Router } = require("express");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("form");
});

messageRouter.post("/", (req, res) => {});

module.exports = messageRouter;
