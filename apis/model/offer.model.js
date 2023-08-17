const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let offerSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    discount: {
      type: String,
    },
    photo: {
        type: Array
    }
  },
  {
    collection: "offers",
  },
);
module.exports = mongoose.model("OferSchema", offerSchema);