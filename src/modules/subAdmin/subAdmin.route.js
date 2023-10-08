const express = require("express");
const {
  createSubAdmin,
  getAllSubAdmin,
  linkCheck,
  getSingleSubAdminInfo,
} = require("./subAdmin.controller");
const router = express.Router();

router.post("/create", createSubAdmin);
router.get("/", getAllSubAdmin);
router.get("/link/:id", linkCheck);
router.get("/info/:token", getSingleSubAdminInfo);

module.exports = router;
