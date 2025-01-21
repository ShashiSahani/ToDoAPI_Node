require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/products"); 
const ProductJSON = require("./products.json"); 

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);

    await Product.deleteMany();

    await Product.create(ProductJSON);

    console.log("Database seeded successfully!");
    process.exit(0); 
  } catch (error) {
    console.error("Error seeding the database:", error.message);
    process.exit(1); 
  }
};

start();
