const { Router } = require("express");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render("form");
});

module.exports = messageRouter;
