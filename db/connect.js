const mongoose = require('mongoose');

const connectDB = async (url) => {
  try {
    console.info(`Trying to connect to ${url}...`);
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    
    });
    console.log("MongoDB connection established successfully.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
