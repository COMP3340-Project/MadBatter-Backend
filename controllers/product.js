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
  const { product_id, p_name, p_description, category_id, isDelete } = req.body;

  connection.query(
    `INSERT INTO product (product_id,p_name,p_description,category_id,isDelete) VALUES (${product_id},${p_name},${p_description},${category_id},${isDelete});`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: `);
    }
  );
};

module.exports = {
  getAllProducts,
  addProduct,
};
