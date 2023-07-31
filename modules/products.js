const mongoose = require("mongoose");

const ProductRating = new mongoose.Schema({
  rate: {
    type: Number,
    required: false,
  },
  count: {
    type: Number,
    required: false,
  },
});

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    rating: ProductRating,
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema);
