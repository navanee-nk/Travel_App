const express = require("express");
const app = express();
const PORT = 3500;

app.get("/", (req, res, next) => {
  res.send("<html><h1>Hello World</h1></html>");
});

app.listen(process.env.PORT || PORT, () => {
  console.log("Server is up and running...");
});
