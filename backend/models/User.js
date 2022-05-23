const mongoose = require("mongoose");
const AccountSchema = require("./Account");
const ProviderSchema = require("./Provider");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      default: "",
      required: [true, "First name is required"],
      // trim: true,
    },

    lastname: {
      type: String,
      default: "",
      required: [true, "Last name is required"],
      // trim: true,
    },

    dob: {
      type: String,
      default: "Not Selected",
      required: true,
    },

    gender: {
      type: String,
      defaults: "Not Selected",
    },

    phone: {
      type: String,
      default: "",
      required: true,
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      // match:
      //   /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
      // trim: true,
    },

    password: {
      type: String,
      required: true,
      min: 6,
    },

    profilePicture: {
      type: String,
      default: "",
    },

    location: {
      type: String,
      default: "",
    },

    contacts: {
      type: Array,
      default: [],
    },

    identities: [],

    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },

    conversations: {
      type: mongoose.Types.ObjectId,
      ref: "Conversation",
    },

    provider_id: [],

    payment: {
      // type: mongoose.Types.ObjectId,
      // ref: "Payment",
      type: String,
      default: "",
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    isProvider: {
      type: Boolean,
      default: false,
    },
    //use object id instead?
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
