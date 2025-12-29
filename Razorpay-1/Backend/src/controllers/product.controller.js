const productModel = require("../models/product.model");


async function createProduct(req, res) {

   const { image, title, description, price: { amount, currency }, category } = req.body // yh data body m ayega

   try {
      const product = await productModel.create({ // product created
         image, title, description, price: { amount, currency }, category
      })

      return res.status(201).json({
         message: "Product created successfully!",
         product
      })

   } catch (error) {
      return res.status(500).json({
         message: "Something went wrong",
         error: error.message
      })
   }
}

async function getProduct(req, res) {
   try {
      const product = await productModel.findOne()
      return res.status(200).json({
         message: "Product fetched successfully",
         product
      })
   } catch (error) {
      return res.status(500).json({
         message: "Something went wrong",
         error: error.message
      })
   }
}

module.exports = {
   createProduct,
   getProduct
}