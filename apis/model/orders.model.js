const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ordersSchema = new Schema(
  {
    orderId: {
      type: String,
    },
    tourId: {
      type: String,
    },
    itinerary: {
      type: String,
    },
    amount: {
      type: String,
    },
    currency: {
      type: String,
    },
    userId: {
      type: String,
    },
    email: {
        type: String
    },
    phone: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zipcode: {
      type: String
    }
  },
  {
    collection: "orders",
  },
);
module.exports = mongoose.model("OrdersSchema", ordersSchema);