var express = require("express");
var router = express.Router();

// GET /applications
router.get("/", function (req, res) {
  res.json(req.app.locals.applications);
});

// POST /applications
router.post("/", function (req, res) {
  const application = req.body;

  req.app.locals.applications.push(application);

  res.status(201).end();
});

module.exports = router;
