require("dotenv").config();

const connectDB = require("./db/connect");

const Task = require("./models/Task");

const TaskJSON = require("./task.json");

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    await Task.create(TaskJSON);
    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding the database:", error.message);
    process.exit(1);
  }
};
start();
