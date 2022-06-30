const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  product_id: {
    type: Int16Array,
    unique: true,
    required: true,
  },
  p_name: {
    type: varchar,
    required: true,
  },
  p_description: {
    type: varchar,
    required: true,
  },
  category_id: {
    type: varchar,
    required: true,
  },
  isDelete: {
    type: Int16Array,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
