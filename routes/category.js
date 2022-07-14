const express = require("express");
const router = express.Router();

const {
  getAllCategory,
  createProductCategory,
  deleteProductCategory,
} = require("../controllers/category");

router.route("/").get(getAllCategory);

router.route("/add").post(createProductCategory);

router.route("/delete").post(deleteProductCategory);

module.exports = router;
