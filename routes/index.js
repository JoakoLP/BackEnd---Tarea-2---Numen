var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Tarea 2 - BackEnd de Joaquin Takara" });
});

module.exports = router;
