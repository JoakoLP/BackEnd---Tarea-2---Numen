const user = (req, res) => {
  const nombre = `${req.params.nombre
    .charAt(0)
    .toUpperCase()}${req.params.nombre.slice(1)} ${req.params.apellido
    .charAt(0)
    .toUpperCase()}${req.params.apellido.slice(1)}`;
  res.send(`Hola ${nombre}!`);
};

module.exports = { user };
