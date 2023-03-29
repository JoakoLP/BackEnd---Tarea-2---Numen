const express = require("express");
const router = express.Router();

const Controller = require("../controllers/mathsController");

// localhost:3000/maths/suma
router.get("/suma/:num1/:num2", Controller.suma);

// localhost:3000/maths/dividir
router.get("/dividir/:dividendo/:divisor", Controller.division);

// localhost:3000/maths/par-o-impar?num=
router.get("/par-o-impar", Controller.parImpar);

module.exports = router;
