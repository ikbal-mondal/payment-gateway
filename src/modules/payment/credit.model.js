const mongoose = require("mongoose");

const creditSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    expireDate: {
      type: String,
      required: true,
    },
    cvv: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
      required: true,
    },
    address: {
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

const Credit = mongoose.model("credit", creditSchema);
module.exports = Credit;
