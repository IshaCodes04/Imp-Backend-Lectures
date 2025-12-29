const express = require("express");
const productController = require("../controllers/product.controller");



const router = express.Router(); // created router



// createProduct api
router.post('/', productController.createProduct);

// fetch our product
router.get("/getProduct", productController.getProduct)



module.exports = router;