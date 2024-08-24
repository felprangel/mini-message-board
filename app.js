const express = require("express");
const indexRouter = require("./routes/indexRouter");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
