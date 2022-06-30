var connection = require("../database/database");

const getAllUsers = (req, res) => {
  connection.query("SELECT * FROM user", function (err, rows) {
    if (err) {
      //   req.flash("error", err);
      res.send(rows);
    } else {
      res.send(rows);
      console.log("Success !!!");
    }
  });
};

module.exports = {
  getAllUsers,
};
