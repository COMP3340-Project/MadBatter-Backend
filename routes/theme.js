const express = require("express");
const router = express.Router();

const { gettheme } = require("../controllers/theme");

router.route("/").get(gettheme);

module.exports = router;
