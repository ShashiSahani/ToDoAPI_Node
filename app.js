require("dotenv").config();
const connectDB = require("./db/connect");
const express = require("express");
const bodyParser = require("body-parser");
const tasksRoutes = require("./routes/task");
const PORT = 3111;

const products_routes = require("./routes/products");
const app = express();

app.use(bodyParser.json());
const dbUrl = process.env.DB_URL ||`mongodb+srv://shashisahani2025:root@shopingbag.3ruox.mongodb.net/`
;
if (!dbUrl) {
  console.error("Error: Missing DB url env variable ");
  process.exit("1");
}
app.use("/api/tasks", tasksRoutes);

app.get("/", (req, res) => {
  res.send("HI, I am live");
});
app.use("/api/products", products_routes);
app.get('/ab*cd', (req, res) => {
    res.send('ab*cd')
  })
app.listen(PORT, async () => {
  try {
    await connectDB(dbUrl);
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error starting the server:", error.message);
  }
});
