const express = require("express");
const productController = require("../controllers/product.controller");



const router = express.Router(); // created router



// createProduct api
router.post('/', productController.createProduct);




module.exports = router;