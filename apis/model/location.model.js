const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let locationSchema = new Schema(
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
    collection: "locations",
  },
);
module.exports = mongoose.model("LocationSchema", locationSchema);