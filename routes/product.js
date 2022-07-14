const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  deleteProduct,
} = require("../controllers/product");

router.route("/").get(getAllProducts);

router.route("/add").post(createProduct);

router.route("/delete").post(deleteProduct);

module.exports = router;
