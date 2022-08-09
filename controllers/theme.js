var connection = require("../database/database");

const gettheme = (req, res) => {
  connection.query(
    `
      SELECT themecolor 
      FROM theme
      WHERE activecolor = 1
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

module.exports = {
  gettheme,
};
