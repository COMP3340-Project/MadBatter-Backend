var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var flash = require("express-flash");
var bodyParser = require("body-parser");

var app = express();

// middleware
app.use(express.json());

// Setting up the routes
const products = require("./routes/product");

app.use("/api/v1/products", products);

//
//

//
// error handler

module.exports = app;
