const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/dashboard/index.html"));
});
app.get("/settings", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/settings/index.html"));
});

app.listen(port, () => {
  console.log("server start...");
});

app.use(express.static(path.join(__dirname + "/public")));
