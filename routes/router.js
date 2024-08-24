const { Router } = require("express");

const router = Router();

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

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
