const pool = require("./pool");

async function getMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessage(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  rows[0].data_criacao = new Date(rows[0].data_criacao).toLocaleString("pt-BR");
  return rows[0];
}

async function createMessage(message, user) {
  await pool.query("INSERT INTO messages (usuario, mensagem) VALUES ($1, $2)", [
    message,
    user,
  ]);
}

module.exports = { getMessages, getMessage, createMessage };
