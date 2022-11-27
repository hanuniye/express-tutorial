const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).json({success: true, data:"u reach us"});
})

router.post("/", (req,res) => {
  const { name } = req.body
  res.send(name)
})


module.exports = router;