const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required!"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
    trim: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "asus", "lenovo", "mi"],
      message: "{VALUE} is not supported!", // Use {VALUE} for invalid values
    },
  },
});

module.exports = mongoose.model("Products", productsSchema);
