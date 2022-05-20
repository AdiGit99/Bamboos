const mongoose = require("mongoose");

const ProviderSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      default: "",
    },

    height: {
      type: String,
      default: "",
    },

    weight: {
      type: String,
      default: "",
    },

    education: {
      type: String,
      default: "",
    },

    upcoming: {
      type: mongoose.Types.ObjectId,
      ref: "Job",
    },

    past: {
      type: mongoose.Types.ObjectId,
      ref: "Job",
    },

    contacts: {
      type: Array,
      default: [],
    },

    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },

    conversations: {
      type: mongoose.Types.ObjectId,
      ref: "Conversation",
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Provider", ProviderSchema);
