export async function getProduct(slug) {
  console.log(`Loading: ${slug}`);
  const response = await fetch(`http://localhost:5000/pages/products/${slug}`);
  if (!response.ok) {
    throw new Response("Failed to fetch posts.", { status: 500 });
  }
  return response.json();
}

export async function getProducts() {
  console.log(`Loading: products`);
  const response = await fetch(`http://localhost:5000/products`);
  if (!response.ok) {
    throw new Response("Failed to fetch posts.", { status: 500 });
  }
  return response.json();
}

export async function saveProduct(product) {
  const response = await fetch("http://localhost:5000/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw response;
  }
}

export async function saveOrder(order) {
  const response = await fetch("http://localhost:5000/orders", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw response;
  }
}

export async function getCustomer(user) {
  console.log(`Loading: ${user}`);
  const response = await fetch(`http://localhost:5000/customers/${user}`);
  if (!response.ok) {
    throw new Response("Failed to fetch customer.", { status: 500 });
  }
  return response.json();
}

export async function getSearchResult(searchTerm) {
  console.log(`Loading: ${searchTerm}`);
  const response = await fetch(`http://localhost:5000/search?q=${searchTerm}`);
  if (!response.ok) {
    throw new Response("Failed to fetch search results.", { status: 500 });
  }
  return response.json();
}

export async function getInit() {
  const response = await fetch("http://localhost:5000/init");
  if (!response.ok) {
    throw new Response("Failed to fetch init.", { status: 500 });
  }
  return response.json();
}
