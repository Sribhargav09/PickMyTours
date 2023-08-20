const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let reviewSchema = new Schema(
  {
    tourId: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    status: {
      type: String,
    },
    comments: {
        type: String
    }
  },
  {
    collection: "reviews",
  },
);
module.exports = mongoose.model("ReviewSchema", reviewSchema);