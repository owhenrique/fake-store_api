const Cart = require("../modules/cart");

function CartController() {}

CartController.prototype.getById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    res.status(200).send({
      data: cart,
      status: 200,
      message: "Cart successfully finded!",
    });
  } catch (err) {
    res.status(500).send({
      data: {},
      status: 500,
      message: err.message,
    });
  }
};

CartController.prototype.post = async (req, res) => {
  const new_cart = new Cart(req.body);
  try {
    const saved_cart = await new_cart.save();
    res.status(201).send({
      data: saved_cart,
      status: 201,
      message: "Cart successfully created!",
    });
  } catch (err) {
    res.status(500).send({
      data: {},
      status: 500,
      message: err.message,
    });
  }
};

CartController.prototype.patch = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id);
  } catch (err) {
    res.status(500).send({
      data: {},
      status: 500,
      message: err.message,
    });
  }
};

CartController.prototype.updateCart = async (req, res) => {
  const product_id = req.body.id;
  const operation_type = req.body.type;
  try {
    if (operation_type === "remove") {
      await Cart.findByIdAndUpdate(req.params.id, {
        $pull: {
          products: {
            id: product_id,
          },
        },
      });
      res.status(200).send({
        data: {},
        status: 200,
        message: "Product successfully removed from cart!",
      });
    } else if (operation_type === "add") {
      const cart = await Cart.findByIdAndUpdate(req.params.id, {
        $push: {
          products: {
            id: product_id,
            quantity: 1,
          },
        },
      });
      res.status(200).send({
        data: cart,
        status: 200,
        message: "Product successfully added to cart!",
      });
    } else {
      res.status(400).send({
        data: {},
        status: 400,
        message: "Operation method is invalid!",
      });
    }
  } catch (err) {
    res.status(500).send({
      data: {},
      status: 500,
      message: err.message,
    });
  }
};

CartController.prototype.updateProductQuantity = async (req, res) => {
  const product_id = req.body.id;
  const operation_type = req.body.type;

  try {
    let updateOperation = {};
    if (operation_type === "remove") {
      updateOperation = { $inc: { "products.$[element].quantity": -1 } };
    } else if (operation_type === "add") {
      updateOperation = { $inc: { "products.$[element].quantity": 1 } };
    } else {
      return res.status(400).send({
        data: {},
        status: 400,
        message: "Invalid operation type!",
      });
    }

    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      updateOperation,
      {
        arrayFilters: [{ "element.id": product_id }],
        new: true,
      }
    );

    if (!updatedCart) {
      return res.status(404).send({
        data: {},
        status: 404,
        message: "Cart not found!",
      });
    }

    res.status(200).send({
      data: updatedCart,
      status: 200,
      message: "Product quantity successfully updated!",
    });
  } catch (error) {
    res.status(500).send({
      data: {},
      status: 500,
      message: error.message || "Internal server error",
    });
  }
};

module.exports = CartController;
