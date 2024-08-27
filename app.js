const express = require("express");
const router = require("./routes/router");
const path = require("node:path");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
