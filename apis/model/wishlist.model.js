const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let wishlistSchema = new Schema(
  {
    tourId: {
      type: String,
    },
    userId: {
      type: String,
    }
  },
  {
    collection: "wishlist",
  },
);
module.exports = mongoose.model("WishlistSchema", wishlistSchema);