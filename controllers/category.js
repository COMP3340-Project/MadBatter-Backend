var connection = require("../database/database");

const getAllCategory = (req, res) => {
  connection.query("SELECT * FROM product_category", function (err, rows) {
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
  getAllCategory,
};