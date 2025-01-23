require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db/connect");
const tasksRoutes = require("./routes/task");
const products_routes = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 5489;
const dbUrl = process.env.DB_URL;

if (!dbUrl) {
  console.error("Error: Missing DB URL environment variable.");
  process.exit(1);
}

app.use(cors()); 
app.use(bodyParser.json());

app.use("/api/tasks", tasksRoutes);
app.use("/api/products", products_routes);

app.get("/", (req, res) => {
  res.send("Hi, I am live!");
});

app.get('/ab*cd', (req, res) => {
  res.send('ab*cd');
});

app.listen(PORT, async () => {
  try {
    await connectDB(dbUrl);
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error starting the server:", error.message);
  }
});
