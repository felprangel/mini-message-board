const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows;
}

async function createMessage(message, user) {
  await pool.query(
    "INSERT INTO messages (usuarios, mensagem) VALUES ($1, $2)",
    [message, user]
  );
}

module.exports = { getMessages, getMessage, createMessage };
