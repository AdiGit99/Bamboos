const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    helfulVotes: {
      type: Number,
    },

    dateLeft: {
      type: Date,
    },

    client: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    provider: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Review", ReviewSchema);
