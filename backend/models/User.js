const mongoose = require("mongoose");
const AccountSchema = require("./Account");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      default: "",
      //required: [true, "First name is required"],
      // trim: true,
    },

    lastname: {
      type: String,
      default: "",
      //required: [true, "Last name is required"],
      // trim: true,
    },

    dob: {
      type: String,
      default: "Not Selected",
    },

    gender: {
      type: String,
      defaults: "Not Selected",
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

    phone: {
      type: String,
      default: "",
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

    identities: [AccountSchema],

    reviews: {
      type: mongoose.Types.ObjectId,
      ref: "Review",
    },

    conversations: {
      type: mongoose.Types.ObjectId,
      ref: "Conversation",
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    isProvider: {
      type: Boolean,
      default: false,
    },

    // desc: {
    //   type: String,
    //   max: 50,
    // },
    // city: {
    //   type: String,
    //   max: 50,
    // },
    // from: {
    //   type: String,
    //   max: 50,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
