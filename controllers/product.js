var connection = require("../database/database");
const Product = require("../models/product.model");

const getAllProducts = (req, res) => {
  connection.query("SELECT * FROM product", function (err, rows) {
    if (err) {
      //   req.flash("error", err);
      res.send(rows);
    } else {
      res.send(rows);
      console.log("Success !!!");
    }
  });
};

const addProduct = async (req, res) => {
  const p_name = req.body.p_name;
  const p_id = 12;
  const p_description = "tesr";
  const category_id = req.body.category_id;
  const isDelete = req.body.isDelete;
  connection.query(
    `INSERT INTO product (product_id,p_name,p_description,category_id,isDelete) VALUES (${p_id},${p_name},${p_description},${category_id},${isDelete});`
  );
};

module.exports = {
  getAllProducts,
  addProduct,
};
