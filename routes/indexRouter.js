const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Olá!",
    user: "Rafael",
    added: new Date(),
  },
  {
    text: "Olá mundo!",
    user: "Bernardo",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

messageRouter.post("/new", (req, res) => {});

module.exports = indexRouter;
