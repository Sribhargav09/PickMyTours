const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let testinomialSchema = new Schema(
  {
    name: {
      type: String,
    },
    comment: {
      type: String,
    },
    photo: {
        type: Array
    }
  },
  {
    collection: "testinomials",
  },
);
module.exports = mongoose.model("TestinomialSchema", testinomialSchema);