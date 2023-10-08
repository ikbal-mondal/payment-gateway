const express = require("express");
const { adminLogin, createUser, userLogin } = require("./user.controller");
const router = express.Router();

router.post("/login", userLogin);
router.post("/create-user", createUser);

module.exports = router;
