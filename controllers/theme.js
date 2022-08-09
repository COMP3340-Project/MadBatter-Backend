var connection = require("../database/database");

const gettheme = (req, res) => {
  connection.query(
    `
      SELECT * 
      FROM theme
      WHERE activecolor = 'ACTIVE'
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

const getAlltheme = (req, res) => {
  connection.query(
    `
        SELECT * 
        FROM theme
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

const updatetable = (req, res) => {
  connection.query(
    `
      UPDATE theme SET activecolor = 'DEACTIVE';
    
      `,
    function (err, rows) {
      if (err) {
        //   req.flash("error", err);
        //  res.send(rows);
      } else {
        // res.send(rows);
        console.log("Success !!!");
      }
    },
  );
};

const updatetheme = (req, res) => {
  const themename = req.query.themename;

  connection.query(
    `
        UPDATE theme 
        SET activecolor = 'ACTIVE'
        WHERE themeName = '${themename}';
      
        `,
    function (err, rows) {
      if (err) {
        //   req.flash("error", err);
        //  res.send(rows);
      } else {
        // res.send(rows);
        console.log("Success !!!");
      }
    },
  );
};

module.exports = {
  gettheme,
  getAlltheme,
  updatetable,
  updatetheme,
};
