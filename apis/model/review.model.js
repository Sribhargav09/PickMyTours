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
        type: String,
    },
    rating:{
        type: String
    },
    location:{
        type: String
    },
    money:{
        type: String
    },
    staff:{
      type: String
    },
    clean:{
      type: String
    },
    facility:{
      type: String
    },
    comfort:{
      type: String
    },
    wifi:{
      type: String
    },
    photo: {
      type: Array
    },
    date: {
      type: String
    }
  },
  {
    collection: "reviews",
  },
);
module.exports = mongoose.model("ReviewSchema", reviewSchema);