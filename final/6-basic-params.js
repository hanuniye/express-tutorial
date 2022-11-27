const express = require("express");
const { products } = require("./data")

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1> <a href='/api/products'>products</a>");
})

app.get("/api/products", (req, res) => {
  // res.json(products)

  // waxaad ka reebi kadha opject walba descriptionka ama desc: 
  const newProducts = products.map(product => {
    const { id,name,price } = product;
    return { id,name,price }
  })

  res.json(newProducts);
})

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(product => {
    return product.id === parseInt(productID);
  })

  if(!singleProduct) {
    res.status(404).send("<h3>ooops!! product is not exist</h3>")
  }
  res.json(singleProduct)
})


app.listen(5000)