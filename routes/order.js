const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/order");

router.route("/").get(getAllProducts);

module.exports = router;
