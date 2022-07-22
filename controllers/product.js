var connection = require("../database/database");
const Product = require("../models/product.model");

const http = require("http");
const url = require("url");

const getAllProducts = (req, res) => {
  connection.query(
    `
    SELECT product.product_id, product.product_name, product.product_description, product_category.category_name
    FROM product
    INNER JOIN product_category ON product_category.category_id = product.category_id
    where product.isDelete = 0 and product_category.isDelete = 0 
    `,
    function (err, rows) {
      if (err) {
        //   req.flash("error", err);
        res.send(rows);
      } else {
        res.send(rows);
        console.log("Success !!!");
      }
    },
  );
};

const createProduct = (req, res) => {
  const { product_name, product_description, category_id } = req.body;
  connection.query(
    `
      INSERT INTO madbatter.product (product_name,product_description,category_id ,isDelete ) VALUES ("${product_name}","${product_description}",${category_id}, 0) 
      `,
    function (err, rows) {
      if (err) {
        req.flash("error", err);
        res.send(rows);
      } else {
        res.send(rows);
        console.log("Success !!!");
      }
    },
  );
};

const deleteProduct = (req, res) => {
  const { product_name, category_id } = req.body;
  connection.query(
    `
      UPDATE madbatter.product 
      SET isDelete = 1
      WHERE product_name = "${product_name}" AND category_id = "${category_id}" 
      `,
    function (err, rows) {
      if (err) {
        req.flash("error", err);
        res.send(rows);
      } else {
        res.send(rows);
        console.log("Success !!!");
      }
    },
  );
};

const productDetails = (req, res) => {
  const product_id = req.query.product_id;
  const category_id = req.query.category_id;
  connection.query(
    `
      SELECT * 
      FROM product
      where isDelete = 0 and product_id = ${product_id} AND category_id = ${category_id}
      `,
    function (err, rows) {
      if (err) {
        req.flash("error", err);
        res.send(rows);
      } else {
        res.send(rows);
        console.log("Success !!!");
      }
    },
  );
};

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
  productDetails,
};
