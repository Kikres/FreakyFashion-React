var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  const products = req.app.locals.pages.products;

  const searchTerm = req.query.q;

  const regexp = new RegExp(searchTerm, "i");

  const result = products.filter((x) => searchTerm && regexp.test(x.title));

  res.json(result);
});

module.exports = router;
