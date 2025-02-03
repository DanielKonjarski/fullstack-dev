require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();

app.use(express.json());
app.use(restaurantRoutes);

const PORT = process.env.PORT || 8085;

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to the Restaurant API");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
