const router = require("express").Router();
const Controller = require("../controllers/cart_controllers");

const priv_cart = new Controller();

router.get("/cart/:id", priv_cart.getById);
router.post("/cart/", priv_cart.post);
router.patch("/cart/:id", priv_cart.updateCart);
router.patch("/cart/update/:id", priv_cart.updateProductQuantity);

module.exports = router;
