const express = require("express");
const router = express.Router();

const { user } = require("../controllers/userController");

// localhost:3000/user/saludo
router.get("/saludo/:nombre/:apellido", user);

module.exports = router;
