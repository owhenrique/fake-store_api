const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

const ProductRoutes = require("./routes/products_routes");
const CartRoutes = require("./routes/cart_routes");

dotenv.config();

const API_PORT = process.env.API_PORT;
const DB_URL = process.env.DB_URL;

app.use(cors());
app.use(express.json());
mongoose.connect(DB_URL);

app.use("/api/v1", ProductRoutes);
app.use("/api/v1", CartRoutes);

app.listen(8000, (req, res) =>
  console.log(`Api is running on port ${API_PORT}`)
);
