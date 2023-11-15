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
    dob: {
      type: String
    },
    role: {
      type: String
    },
    photo: {
      type: Array
    },
    code: {
      type: String
    },
    about: {
      type: String
    },
    address1: {
      type: String
    },
    address2: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zipcode: {
      type: String
    },
    active: {
      type: Boolean
    }
  },
  {
    collection: "users",
  },
);
module.exports = mongoose.model("userSchema", userSchema);