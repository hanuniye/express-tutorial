const express = require("express");
const { products } = require("./data")

const app = express();

app.get("/api/v1/query", (req, res) => {
  const { search, limit} = req.query;
  let sortProducts = [...products]

  if(search){
    sortProducts = sortProducts.filter(product => {
      return product.name.startsWith(search);
    })
  }
  if(limit){
    sortProducts = sortProducts.slice(0,Number(limit))
  }
  if(sortProducts.length < 1){
    res.json({success:true, data: []})
  }
  res.status(200).send(sortProducts)
})

app.listen(5000);