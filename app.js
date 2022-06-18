var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var flash = require("express-flash");
var bodyParser = require("body-parser");

var app = express();

// middleware
app.use(express.json());

app.listen(process.env.PORT || 5000, function () {
  console.log("Server is running on localhost 5000");
});

// Setting up the routes
const products = require("./routes/product");

app.get("/", (req, res) => {
  res.send("I am Alive!! --MadBatter BackEnd");
});

app.use("/api/v1/products", products);

//
//
//

//
// error handler

module.exports = app;
