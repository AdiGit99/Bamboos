const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    provider: {
      type: String,
    },
    userID: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", AccountSchema);
