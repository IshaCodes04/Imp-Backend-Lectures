const express = require("express");
const productRoutes =  require("./routes/product.routes");

// server created
const app = express();

// middleware for take data in req.body
app.use(express.json());


// preffix for our product api
app.use('/api/products', productRoutes);



module.exports = app;