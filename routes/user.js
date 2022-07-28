const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createUser,
  deleteuser,
  find,
} = require("../controllers/user");

router.route("/").get(getAllUsers);

router.route("/add").post(createUser);

router.route("/delete").post(deleteuser);

router.route("/find").get(find);

module.exports = router;
