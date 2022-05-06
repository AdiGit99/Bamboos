const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },

    address: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    time: {
      start: { type: String, required: true },
      end: { type: STring, required: true },
    },

    //or set as default none?
    provider_type: {
      type: String,
      required: true,
    },

    poster: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },

    isBooked: {
      type: Boolean,
      default: false,
    },

    reservedBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
