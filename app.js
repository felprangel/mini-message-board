const express = require("express");
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/newMessageRouter");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
