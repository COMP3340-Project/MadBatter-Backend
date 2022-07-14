const express = require("express");
const router = express.Router();

const { getAllUsers, createUser, deleteuser } = require("../controllers/user");

router.route("/").get(getAllUsers);

router.route("/add").post(createUser);

router.route("/delete").post(deleteuser);

module.exports = router;
