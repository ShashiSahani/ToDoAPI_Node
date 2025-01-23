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
  // Extract query parameters from the request
  const queryFilters = req.query;
 

  try {
    // Apply filters dynamically if any query parameters are provided
    const products = await Product.find(queryFilters);
    console.log("queryFilters",products)

    // If no products match, send a 404 error
    if (products.length === 0) {
      return res.status(404).send('No products found with the specified filters');
    }

    // Send the filtered products back as a response
    res.status(200).json(products);
  } catch (err) {
    // Handle any errors during the query execution
    res.status(500).send('Error fetching products');
  }
};
module.exports = { getAllProducts, getAllProductsTesting };
