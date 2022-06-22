var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var flash = require("express-flash");
var bodyParser = require("body-parser");

var app = express();

// middleware
app.use(express.json());

app.listen(process.env.PORT || 4200, function () {
  console.log("Server is running on localhost 5000");
});

// Setting up the routes
const products = require("./routes/product");
const productcategory = require("./routes/category");
const users = require("./routes/user");
const carts = require("./routes/cart");
const orders = require("./routes/order");

app.get("/", (req, res) => {
  res.send("I am Alive!! --MadBatter BackEnd");
});

app.use("/api/v1/products", products);
app.use("/api/v1/productcategory", productcategory);
app.use("/api/v1/users", users);
app.use("/api/v1/carts", carts);
app.use("/api/v1/orders", orders);

//
//

//
// error handler

module.exports = app;
