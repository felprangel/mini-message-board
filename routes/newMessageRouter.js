const { Router } = require("express");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = messageRouter;
