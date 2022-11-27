const authorize = (req,res,next) => {
  const { user } = req.query;

  if(user === "abdi"){
    req.userName = "abdi"
    next()
  }else{
    res.status(401).send("unauthorized");
  }
}

module.exports = authorize;