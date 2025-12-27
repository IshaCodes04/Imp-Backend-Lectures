const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
  image: String, // image of the product
  title: String,
  description: String,
  price: {
    amount: {
      type: Number,
      min: 0, // min value
    },
    currency: {
      type: String,
      default: "INR",
      enum: ["INR", "USD"]
    }
  },
  category: String

})

const productModel = mongoose.model("product" , productSchema);


module.exports = productModel;