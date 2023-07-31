const Product = require("../models/products");

function ProductController() {}

ProductController.prototype.get = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send({
      data: products,
      status: 200,
      message: "Products successfully finded!",
    });
  } catch (err) {
    res.status(500).send({
      data: [],
      status: 500,
      message: err.message,
    });
  }
};

ProductController.prototype.getById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).send({
        data: product,
        status: 200,
        message: "Product successfully finded!",
      });
    } catch (err) {
      res.status(500).send({
        data: {},
        status: 500,
        message: err.message,
      });
    }
};

ProductController.prototype.post = async (req, res) => {
  const new_product = new Product(req.body);
  try {
    const saved_product = await new_product.save();
    res.status(201).send({
      data: saved_product,
      status: 201,
      message: "Product successfully created!",
    });
  } catch (err) {
    res.status(500).send({
      data: {},
      status: 500,
      message: err.message,
    });
  }
};

ProductController.prototype.put = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(202).send({
      data: product,
      status: 202,
      message: "Product successfully updated!",
    });
  } catch (err) {
    res.status(500).send({
      data: {},
      status: 500,
      message: err.message,
    });
  }
};

ProductController.prototype.delete = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).send({
      data: {},
      status: 204,
      messagem: "Product successfuly deleted!",
    });
  } catch (err) {
    res.status(500).send({
      data: {},
      status: 500,
      message: err.message,
    });
  }
};

ProductController.prototype.getFavorites = async (req, res) => {
  try {
    const favorites_products = await Product.find({ favorited: true });
    res.status(200).send({
      data: favorites_products,
      status: 200,
      message: "Favorited products successfully finded!",
    });
  } catch (err) {
    res.status(500).send({
      data: {},
      status: 500,
      message: err.message,
    });
  }
};

ProductController.prototype.patchFavorites = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.favorited = !product.favorited;
    } else {
      res.status(404).send({
        data: {},
        status: 404,
        message: "Product not found!",
      });
    }

    product.save();

    res.status(200).send({
      data: product,
      status: 200,
      message: "Favorited products successfully finded!",
    });
  } catch (err) {
    res.status(500).send({
      data: {},
      status: 500,
      message: err.message,
    });
  }
};

module.exports = ProductController;
