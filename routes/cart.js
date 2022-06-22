const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/cart");

router.route("/").get(getAllProducts);

module.exports = router;
