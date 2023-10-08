const express = require("express");
const { verifyJwt } = require("./jwt.controller");
const router = express.Router();

router.post("/", verifyJwt);

module.exports = router;
