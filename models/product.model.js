const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  product_id: Number,
  p_name: String,
  p_description: String,
  category_id: String,
  isDelete: Number,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
