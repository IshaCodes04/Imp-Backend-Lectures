const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true
  },
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  paymentId: {
    type: String,
    default: null
  },
  signature: {
    type: String,
    default: null
  },
  amount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: "INR"
  },
  status: {
    type: String,
    enum: ["created", "authorized", "captured", "failed", "refunded"],
    default: "created"
  },
  customerDetails: {
    name: String,
    email: String,
    contact: String
  },
  webhookData: {
    type: Object,
    default: {}
  }
}, {
  timestamps: true
});

const paymentModel = mongoose.model("payment", paymentSchema);

module.exports = paymentModel;