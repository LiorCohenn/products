const express = require("express");
const cors = require('cors');
var bodyParser = require('body-parser');
const fs = require("fs");

var products = require('./data/products.json')
var suppliers = require('./data/suppliers.json');


// App
const app = express();
app.use(bodyParser.json());
app.use(cors());

//get all products
getAllProducts = () =>{
  const result = products.products.map(function(product) {
    //find the supplier name
    product["supplierName"] = suppliers.suppliers.find(supplier => supplier.code == product.supplierCode).name
    return product
  })
  return result
}

// Routes
app.get("/getAllProducts", (req, res) => {
	const result = getAllProducts()
  res.status(200).send({products :result, suppliers: suppliers.suppliers});
});

app.post("/addNewProduct", (req, res) => {
  let {name, price,amount,supplierCode} = req.body
  let code = "f000" + (products.products.length +1)
  const data = {"code": code,"name":name, "price":price,"amount":amount,"supplierCode":supplierCode}
  products.products.push(data)
  //write to the "database"
  fs.writeFile('./data/products.json', JSON.stringify(products), err => {
    const result = getAllProducts()
    if (err) {
      res.status(404).send(false);
    } else {
      res.status(200).send({products :result, suppliers: suppliers.suppliers});
    }
})

})



app.listen(process.env.PORT || 5000, () => console.log(`listening on port ${process.env.PORT || 5000}`));
