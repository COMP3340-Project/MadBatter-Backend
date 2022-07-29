var connection = require("../database/database");

const getAllUsers = (req, res) => {
  connection.query(
    `
    SELECT * 
    FROM user
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

const createUser = (req, res) => {
  const { user_name, user_email, user_password, user_phone, user_address } =
    req.body;
  connection.query(
    `
      INSERT INTO madbatter.user (user_name,user_email,user_password, user_phone, user_address  ,isDelete, permission ) VALUES ("${user_name}","${user_email}","${user_password}","${user_phone}","${user_address}", 0, "user") 
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

const find = (req, res) => {
  const user_email = req.query.user_email;
  const user_password = req.query.user_password;

  connection.query(
    `
    SELECT permission
    FROM user
    WHERE user_email = "${user_email}" AND user_password = "${user_password}" AND isDelete = 0
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

const deleteuser = (req, res) => {
  const { user_name, user_email } = req.body;
  connection.query(
    `
      UPDATE madbatter.user 
      SET isDelete = 1
      WHERE user_name = "${user_name}" AND user_email = "${user_email}" 
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
  getAllUsers,
  createUser,
  deleteuser,
  find,
};
