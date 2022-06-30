var connection = require("../database/database");

const getAllOrders = (req, res) => {
  connection.query("SELECT * FROM order_item", function (err, rows) {
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
  getAllOrders,
};
