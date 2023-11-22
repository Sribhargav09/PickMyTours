const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let subscribtionSchema = new Schema(
  {
    
    email: {
      type: String,
    },
    userId: {
      type: String,
    },
  },
  {
    collection: "Subscribtions",
  },
);
module.exports = mongoose.model("SubscribtionSchema", subscribtionSchema);