const express = require("express");

const app = express();

// basic of express.js 
// expres has http methods 
// get
// post 
// put 
// delete
// all 
// use 

app.get("/", (req, res) => {
  res.status(200).send("home page");
})

app.get("/about", (req, res) => {
  res.status(200).send("about page");
})


// all() method waxa lo isticmala routeka aan la garanyn markii lasoo garaaco 
app.all("*", (req,res) => {
  res.status(404).send("error page")
})

app.listen(5000);

