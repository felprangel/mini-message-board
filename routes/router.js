const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  const mensagens = await db.getMessages();
  res.render("index", { title: "Mini Messageboard", mensagens });
});

router.get("/details/:id", async (req, res) => {
  const id = req.params.id;
  const mensagem = await db.getMessage(id);
  res.render("details", { title: "Message Details", mensagem });
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
