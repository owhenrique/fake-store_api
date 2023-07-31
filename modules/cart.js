const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    products: [
      {
        id: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("cart", CartSchema);
