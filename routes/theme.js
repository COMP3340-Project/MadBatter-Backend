const express = require("express");
const router = express.Router();

const {
  gettheme,
  getAlltheme,
  updatetable,
  updatetheme,
} = require("../controllers/theme");

router.route("/").get(gettheme);

router.route("/all").get(getAlltheme);

router.route("/updatetable").get(updatetable);

router.route("/updatetheme").get(updatetheme);

module.exports = router;
