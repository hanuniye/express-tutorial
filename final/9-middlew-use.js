const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");

const app = express();

app.use([authorize, logger])

app.get("/", (req, res) => {
  console.log(req.userName);
  res.status(200).send("Home Page");
})

app.get("/about", (req, res) => {
  res.status(200).send("about Page");
})

app.get("/api/contact", (req, res) => {
  res.status(200).send("contact Page");
})

app.get("/api/info", (req, res) => {
  res.status(200).send("info Page");
})

app.listen(5000)