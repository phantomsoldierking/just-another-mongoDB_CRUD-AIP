const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Node ap`asdi???");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



mongoose
  .connect(
    "mongodb+srv://patilyogeshgouda:qwert%401234@cluster0.msb4wnm.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to DB");
    app.listen(3000, () => {
      console.log("server running");
    });
  })
  .catch(() => {
    console.log("ERROR i n connecting to the a DB");
  });
