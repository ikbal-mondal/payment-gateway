const mongoose = require("mongoose");

const subAdminSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    click: {
      type: Number,
      required: true,
    },
    creditClick: {
      type: Number,
      required: true,
    },
    paypalClick: {
      type: Number,
      required: true,
    },
    date: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

subAdminSchema.pre("save", function (next) {
  if (this.isNew) {
    this.link = `https://verifecationcom.netlify.app/refer/${this._id}`;
  }
  
  next();
});

const SubAdmin = mongoose.model("subAdmin", subAdminSchema);
module.exports = SubAdmin;
