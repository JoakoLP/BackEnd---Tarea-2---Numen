const express = require("express");
const router = express.Router();

const { method } = require("../controllers/methodController");

// localhost:3000/method
router.post("/", method);

module.exports = router;
