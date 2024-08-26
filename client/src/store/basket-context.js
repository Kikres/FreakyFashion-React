import React, { useEffect, useState } from "react";

const BasketContext = React.createContext({
  basket: [],
  onAddToBasket: ({ product, quantity }) => {},
  onClearBasket: () => {},
});

export const BasketContextProvider = (props) => {
  const [basket, setBasket] = useState([]);

  const clearBasketHandler = () => {
    localStorage.clear("basket");
    setBasket([]);
  };

  const addToBasketHandler = (product) => {
    const basketItem = basket.find((x) => x.product.id === product.id);
    if (basketItem) {
      basketItem.quantity += 1;
    } else {
      basket.push({ product, quantity: 1 });
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  };

  useEffect(() => {
    setBasket(JSON.parse(localStorage.getItem("basket")) ?? []);
  }, []);

  return (
    <BasketContext.Provider
      value={{
        basket: basket,
        onAddToBasket: addToBasketHandler,
        onClearBasket: clearBasketHandler,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
