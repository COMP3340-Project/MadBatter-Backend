const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartSchema = new Schema({
  cart_id: {
    type: Int16Array,
    required: true,
  },
  quantity: {
    type: Int16Array,
    required: true,
  },
  product_id: {
    type: Int16Array,
    required: true,
  },
  category_id: {
    type: varchar,
    required: true,
  },
  user_id: {
    type: Int16Array,
    required: true,
  },
  isDelete: {
    type: Int16Array,
    required: true,
  },
});

const Cart = mongoose.model("Product", cartSchema);
module.exports = Cart;
