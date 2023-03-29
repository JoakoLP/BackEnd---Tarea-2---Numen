const list = (req, res) => {
  console.log(req.query);
  res.json(Object.fromEntries(Object.entries(req.query).slice(0, 5)));
};

module.exports = { list };
