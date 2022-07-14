var connection = require("../database/database");

const getAllCategory = (req, res) => {
  connection.query(
    `
    SELECT * 
    FROM product_category
    WHERE isDelete = 0
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

const createProductCategory = (req, res) => {
  const { category_name } = req.body;
  connection.query(
    `
      INSERT INTO madbatter.product_category (category_name ,isDelete ) VALUES ("${category_name}", 0) 
      `,
    function (err, rows) {
      if (err) {
        //  req.flash("error", err);
        res.send(rows);
      } else {
        res.send(rows);
        console.log("Success !!!");
      }
    },
  );
};

const deleteProductCategory = (req, res) => {
  const { category_name } = req.body;
  connection.query(
    `
      UPDATE madbatter.product_category
      SET isDelete = 1
      WHERE category_name = "${category_name}" 
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
  getAllCategory,
  createProductCategory,
  deleteProductCategory,
};
