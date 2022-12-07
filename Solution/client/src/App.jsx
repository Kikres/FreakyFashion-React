import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getInit } from "./util/api";

import MasterLayout from "./Layouts/MasterLayout";
import AdminLayout from "./Layouts/AdminLayout";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import MyPages from "./pages/MyPages";
import Products from "./pages/admin/Products";
import NewProduct from "./pages/admin/NewProduct";

const initalState = {
  global: null,
  pages: {
    home: {},
    products: [],
  },
  initialLoad: false,
};

function App() {
  const [store, setStore] = useState(initalState);

  const addProductToStore = (product) => {
    const newStore = { ...store };
    newStore.pages.products.push(product);
    setStore(newStore);
  };

  useEffect(() => {
    const updateStore = async () => {
      const data = await getInit();
      setStore({
        ...data,
        initialLoad: true,
      });
    };
    updateStore();
  }, []);

  return store.initialLoad ? (
    <Routes>
      <Route
        path="/"
        element={
          <MasterLayout
            siteHeader={store.global.siteHeader}
            siteFooter={store.global.siteFooter}
          />
        }
      >
        <Route index element={<Home {...store.pages.home} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myPages" element={<MyPages user={store.user} />} />
        <Route
          path="/products/:slug"
          element={
            <ProductDetails
              products={store.pages.products}
              addProductToStore={addProductToStore}
            />
          }
        />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index path="/admin/products" element={<Products />} />
        <Route index path="/admin/products/new" element={<NewProduct />} />
      </Route>
    </Routes>
  ) : null;
}

export default App;
