import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { BasketContextProvider } from "./store/basket-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BasketContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BasketContextProvider>
  </AuthContextProvider>
);
