const express = require("express");
const productRoutes =  require("./routes/product.routes");
const cors = require("cors");

// server created
const app = express();


// use cors 
app.use(cors());
// middleware for take data in req.body
app.use(express.json());



// preffix for our product api
app.use('/api/products', productRoutes);




module.exports = app;