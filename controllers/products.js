const Product = require("../models/products");
const getAllProducts = async (req, res) => {
  const Products = await Product.find({});
  res.status(200).json({ Products });
};

const getAllProductsTesting = async (req, res) => {
    const Products = await Product.find({});
    res.status(200).json({ Products });
};

module.exports = { getAllProducts, getAllProductsTesting };
