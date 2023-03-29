const express = require("express");
const router = express.Router();

const { list } = require("../controllers/listController");

// localhost:3000/list?producto1&producto2&producto3&producto4&producto5&producto6
router.get("/", list);

module.exports = router;
