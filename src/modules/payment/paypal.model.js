const mongoose = require("mongoose");

const paypalSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
    referId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Paypal = mongoose.model("paypal", paypalSchema);
module.exports = Paypal;
