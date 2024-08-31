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

router.post("/new", async (req, res) => {
  await db.createMessage(req.body.message, req.body.user);
  res.redirect("/");
});

module.exports = router;
