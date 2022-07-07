const express = require("express");
const router = express.Router();

const { getAllProducts, addProduct } = require("../controllers/product");

router.route("/").get(getAllProducts);

router.route("/add").post(addProduct);

module.exports = router;
