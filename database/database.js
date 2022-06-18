const mysql = require("mysql");
const fs = require("fs");
require("dotenv").config();

var config = {
  connectionLimit: 50,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "madbatter",
  port: 3306,
  ssl: {
    ca: fs.readFileSync("BaltimoreCyberTrustRoot.crt.pem"),
  },
};
/*
const conn = new mysql.createConnection(config);

conn.connect(function (err) {
  if (err) {
    console.log("!!! Cannot connect !!! Error:");
    throw err;
  } else {
    console.log("Connection established.");
  }
});
*/

var conn = mysql.createConnection({
  connectionLimit: 50,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "madbatter",
  port: 3306,
  ssl: {
    ca: fs.readFileSync("BaltimoreCyberTrustRoot.crt.pem"),
  },
});

conn.connect(function (err) {
  if (err) {
    console.log("!!! Cannot connect !!! Error:");
    setTimeout(handleDisconnect, 1000);
    handleDisconnect();
  } else {
    console.log("Connection established.");
  }
});

function handleDisconnect() {
  console.log("handleDisconnect()");
  conn.destroy();
  conn = mysql.createConnection(config);
  conn.connect(function (err) {
    if (err) {
      console.log(" Error when connecting to db  (DBERR001):", err);
      setTimeout(handleDisconnect, 1000);
    }
  });
}

module.exports = conn;
