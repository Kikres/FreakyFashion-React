var express = require("express");
var router = express.Router();

router.get("/:slug", function (req, res) {
  const pages = req.app.locals.pages;
  const slug = req.params.slug;

  const page = pages[slug];

  if (!page) {
    res.status(404).send();
    return;
  }

  res.json(page);
});

router.get("/products/:slug", function (req, res) {
  const pages = req.app.locals.pages;
  const slug = req.params.slug;

  const page = pages.products.find((x) => x.urlSlug === slug);

  if (!page) {
    res.status(404).send();
    return;
  }

  res.json(page);
});

module.exports = router;
