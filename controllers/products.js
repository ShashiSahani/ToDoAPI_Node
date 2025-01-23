const Product = require("../models/products");
const getAllProducts = async (req, res) => {
  const Products = await Product.find({});
  res.status(200).json({ Products });
};

// const getAllProductsTesting = async (req, res) => {
//     const Products = await Product.find(req.query);
//     const {company}=req.query;
//     if(!company){
//       return res.status(400).send("Company query parameter is required")
//     }

//     try {
//       const products = await Product.find({ company });
//       if (products.length === 0) {
//         return res.status(404).send('No products found for this company');
//       }
//       res.status(200).json(products);
//     } catch (err) {
//       res.status(500).send('Error fetching products');
//     }
// };
const getAllProductsTesting = async (req, res) => {
  const queryFilters = req.query;
 

  try {
    const products = await Product.find(queryFilters);
    console.log("queryFilters",products)

    if (products.length === 0) {
      return res.status(404).send('No products found with the specified filters');
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
};
module.exports = { getAllProducts, getAllProductsTesting };
