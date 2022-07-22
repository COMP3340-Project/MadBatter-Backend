const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  deleteProduct,
  productDetails,
} = require("../controllers/product");

router.route("/").get(getAllProducts);

router.route("/add").post(createProduct);

router.route("/delete").post(deleteProduct);

router.route("/details").get(productDetails);

module.exports = router;
