const express = require("express");
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/newMessageRouter");
const app = express();

app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
