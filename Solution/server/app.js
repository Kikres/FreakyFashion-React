var express = require("express");
var logger = require("morgan");
var cors = require("cors");

var pagesRouter = require("./routes/pages");
var searchRouter = require("./routes/search");
var applicationsRouter = require("./routes/applications");
var ordersRouter = require("./routes/orders");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/orders", ordersRouter);

app.locals.applications = [];
const global = {
  siteHeader: {
    links: [
      { name: "Jackor", url: "#" },
      { name: "Byxor", url: "#" },
      { name: "Skor", url: "#" },
      { name: "Rea", url: "#" },
    ],
    icons: [
      { className: "search", url: "/checkout" },
      { className: "login", url: "/login" },
    ],
  },
  siteFooter: {
    menuList: [
      {
        title: "Shopping",
        links: [
          { title: "VinterJackor", link: "www.google.com" },
          { title: "Puferjackor", link: "www.google.com" },
          { title: "Kappa", link: "www.google.com" },
          { title: "Trenchcoats", link: "www.google.com" },
        ],
      },
      {
        title: "Mina Sidor",
        links: [
          { title: "Mina Ordrar", link: "www.google.com" },
          { title: "Mitt Konto", link: "www.google.com" },
        ],
      },
      {
        title: "Kundtjänst",
        links: [
          { title: "Retur Policy", link: "www.google.com" },
          { title: "Integritetspolicy", link: "www.google.com" },
        ],
      },
    ],
    iconList: [
      { className: "fa-earth-europe", title: "Gratis frakt och returer" },
      { className: "fa-truck-fast", title: "Expressfrakt" },
      { className: "fa-shield-halved", title: "Säkra betalningar" },
      { className: "fa-sparkles", title: "Nyheter varje dag" },
    ],
  },
};

const pages = {
  home: {
    hero: {
      imageUrl: "https://via.placeholder.com/550x400",
      title: "Lorem Ipsum Dolor",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      link: "www.google.se",
      buttonText: "CTA",
    },
    spots: [
      {
        link: "www.google.se",
        imageUrl: "https://via.placeholder.com/600x400",
        title: "Lorem Ipsum Dolor",
      },
      {
        link: "www.google.se",
        imageUrl: "https://via.placeholder.com/600x400",
        title: "Lorem Ipsum Dolor",
      },
      {
        link: "www.google.se",
        imageUrl: "https://via.placeholder.com/600x400",
        title: "Lorem Ipsum Dolor",
      },
    ],
    popularProducts: {
      title: "Popular Products",
      products: [
        {
          image: "https://via.placeholder.com/300x400",
          link: "www.google.se",
          title: "Svart T-Shirt",
          price: "299",
          urlSlug: "svart-t-shirt",
        },
        {
          image: "https://via.placeholder.com/300x400",
          link: "www.google.se",
          title: "Blå T-Shirt",
          price: "299",
          urlSlug: "bla-t-shirt",
        },
        {
          image: "https://via.placeholder.com/300x400",
          link: "www.google.se",
          title: "Röd T-Shirt",
          price: "299",
          urlSlug: "rod-t-shirt",
        },
      ],
    },
  },
  products: [
    {
      id: 1,
      image: "https://via.placeholder.com/600x500",
      title: "Svart T-Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 299,
      urlSlug: "svart-t-shirt",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/600x500",
      title: "Blå T-Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 299,
      urlSlug: "bla-t-shirt",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/600x500",
      title: "Röd T-Shirt",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      price: 299,
      urlSlug: "rod-t-shirt",
    },
  ],
};

app.locals.pages = {
  home: pages.home,
  products: pages.products,
};

app.locals.customers = [];

app.use("/pages", pagesRouter);
app.use("/search", searchRouter);
app.use("/applications", applicationsRouter);

app.get("/init", function (req, res) {
  res.json({
    global,
    pages: {
      home: pages.home,
      products: [],
    },
  });
});

app.get("/customers", function (req, res) {
  const customers = req.app.locals.customers;

  res.json(customers);
});

app.post("/customers", function (req, res) {
  const customer = req.app.locals.customers.find(
    (x) => x.email == req.body.email
  );
  if (customer) {
    console.log(customer);
    console.log(req.body.password);
    return customer.password === req.body.password
      ? res.status(201).end()
      : res.status(401).end();
  }
  res.status(401).end();
});

app.get("/customers/:email", function (req, res) {
  const email = req.params.email;

  const customers = req.app.locals.customers;

  const customer = customers.find((x) => x.email == email);

  res.json(customer);
});

app.get("/products", function (req, res) {
  const products = req.app.locals.pages.products;
  res.json(products);
});

app.post("/products", function (req, res) {
  const { title, description, imageUrl, price } = req.body;
  const products = req.app.locals.pages.products;
  const popularProducts = req.app.locals.pages.home.popularProducts.products;
  const product = {
    id: products.length + 1,
    image: imageUrl,
    title,
    description,
    price,
    urlSlug: title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""),
  };

  products.push(product);
  popularProducts.push(product);

  res.status(201).end();
});

module.exports = app;
