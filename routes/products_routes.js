const router = require("express").Router();
const Controller = require("../controllers/products_controllers");

const priv_controller = new Controller();

router.patch("/products/favorites/:id", priv_controller.patchFavorites);
router.get("/products/favorites", priv_controller.getFavorites);
router.get("/products", priv_controller.get);
router.get("/products/:id", priv_controller.getById);
router.post("/products", priv_controller.post);
router.put("/products/:id", priv_controller.put);
router.delete("/products/:id", priv_controller.delete);

module.exports = router;
