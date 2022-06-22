const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/category");

router.route("/").get(getAllProducts);

module.exports = router;
