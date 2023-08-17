const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let tourTypeSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    photo: {
        type: Array
    }
  },
  {
    collection: "tour-types",
  },
);
module.exports = mongoose.model("TourTypeSchema", tourTypeSchema);