const express = require("express");
const logger = require("../logger");
const authorize = require("../authorize");

const app = express();

app.get("/",logger, (req, res) => {
  console.log(req.userName);
  res.status(200).send("Home Page");
})

app.get("/about", logger, (req, res) => {
  res.status(200).send("about Page");
})

app.listen(5000)