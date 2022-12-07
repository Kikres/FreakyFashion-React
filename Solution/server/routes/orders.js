const express = require("express");
const router = express.Router();

// POST /orders
router.post("/", function (req, res) {
  const { firstName, lastName, email, password, basket } = req.body;

  const customers = req.app.locals.customers;

  const customer = customers.find((x) => x.email === email);

  const order = {
    date: new Date(),
    items: [...basket],
  };

  if (customer) {
    customer.orders.push(order);
  } else {
    customers.push({
      firstName,
      lastName,
      email,
      password,
      orders: [order],
    });
  }

  res.status(201).end();
});

module.exports = router;
