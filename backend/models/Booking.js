const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    //id?
    client_name: {
      type: String,
      required: true,
    },

    client_phone: {
      type: String,
      required: true,
    },

    booking_date: {
      type: String,
      required: true,
    },

    jobId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Job",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
