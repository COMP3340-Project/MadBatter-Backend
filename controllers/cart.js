var connection = require("../database/database");

const getAllCart = (req, res) => {
  connection.query("SELECT * FROM cart_item", function (err, rows) {
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
  getAllCart,
};
