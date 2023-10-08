const express = require("express");
const {
  createPayment,
  getAllPayment,
  deleteSinglePayment,
  getAllPaymentForSubAdmin,
  getTotalClick,
} = require("./payment.controller");
const router = express.Router();

router.post("/", createPayment);
router.get("/:type", getAllPayment);
router.get("/subAdmin/:type", getAllPaymentForSubAdmin);
router.delete("/:id", deleteSinglePayment);
router.get("/totalClick/:type", getTotalClick);

module.exports = router;
