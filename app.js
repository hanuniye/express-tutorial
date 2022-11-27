const express = require("express");
const peopleRoute = require("./routes/people");
const loginRoute = require("./routes/login");

const app = express();

app.use(express.static("./methods-public"));
// this middleware to access data from form or parse data from form application/ww-xx-encoded ayu false ka dhigaa
app.use(express.urlencoded({extended: false}));
// markad form xog kasoo direyso inaad middlwarekan isticmasho waa khasab
app.use(express.json());
app.use("/api/people", peopleRoute);
app.use("/login", loginRoute);

app.post("/api/postman", (req, res) => {
  const { name } = req.body

  if(!name){
    res.status(400).send("please provide name a value");
  }
  res.status(200).json({success: true, data:[...people, {name}]})
})



app.listen(5000);