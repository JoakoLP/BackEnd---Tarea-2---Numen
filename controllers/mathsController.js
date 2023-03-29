class Controller {
  suma(req, res) {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    if (num1 < 0 || num2 < 0) {
      res.send(`Uno de los números enviados es menor a 0.`);
    } else {
      res.json({ resultado: num1 + num2 });
    }
  }

  division(req, res) {
    const divisor = req.params.divisor;
    const dividendo = req.params.dividendo;
    if (divisor <= 0) {
      res.json({ error: "no se puede dividir por cero" });
    } else {
      res.json({ resultado: dividendo / divisor });
    }
  }

  parImpar(req, res) {
    const num = Number(req.query.num);
    if (num % 2 > 0) {
      res.send("no autorizado");
    } else if (num % 2 == 0) {
      res.send("autorizado");
    } else {
      throw new Error(`Valor inválido. Se interrumpe la ejecución.`);
    }
  }
}

module.exports = new Controller();
