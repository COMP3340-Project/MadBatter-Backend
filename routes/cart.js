const express = require("express");
const router = express.Router();

const { getAllCart } = require("../controllers/cart");

router.route("/").get(getAllCart);

module.exports = router;
