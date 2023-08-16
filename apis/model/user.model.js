const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phone: {
        type: String
    },
    role: {
      type: String
    },
    photo: {
      type: Array
    }
  },
  {
    collection: "users",
  },
);
module.exports = mongoose.model("userSchema", userSchema);