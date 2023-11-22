const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let enquierySchema = new Schema(
  {
    offerId: {
      type: String,
    },
    offerInformation: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    type: {
      type: String,
    },
    information: {
        type: String
    },
    status: {
      type: String
    },
  },
  {
    collection: "enquierys",
  },
);
module.exports = mongoose.model("EnquierySchema", enquierySchema);