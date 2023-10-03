const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let querySchema = new Schema(
  {
    destination: {
      type: String,
    },
    depature: {
      type: String,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    travelDate: {
      type: String,
    },
    noOfNights: {
        type: String
    },
    noOfPeople: {
      type: String
    },
    resolved: {
      type: Boolean
    },
  },
  {
    collection: "quierys",
  },
);
module.exports = mongoose.model("querySchema", querySchema);