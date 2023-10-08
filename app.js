const express = require("express");
const cors = require("cors");
const app = express();

const UserRoutes = require("./src/modules/user/user.route");
const PaymentRoutes = require("./src/modules/payment/payment.route");
const JwtRoutes = require("./src/modules/jwt/jwt.route");
const SubAdminRoutes = require("./src/modules/subAdmin/subAdmin.route");


app.use(cors({
    origin: 'https://verifecation.netlify.app'
  }));

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/payment", PaymentRoutes);
app.use("/api/v1/jwt", JwtRoutes);
app.use("/api/v1/subAdmin", SubAdminRoutes);

module.exports = app;
