import React, { useState, useContext } from "react";
import { saveOrder } from "../util/api";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import CheckoutTable from "../components/Checkout/CheckoutTable";
import AuthContext from "../store/auth-context";
import BasketContext from "../store/basket-context";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const ctxAuth = useContext(AuthContext);
  const { basket, onClearBasket } = useContext(BasketContext);
  const navigation = useNavigate();

  const checkoutHandler = (customerForm) => {
    saveOrder({ ...customerForm, basket });
    ctxAuth.onNewUser(customerForm.email);
    onClearBasket();
    setOrderConfirmed(true);
    setTimeout(() => {
      navigation("/myPages");
    }, 5000);
  };

  return (
    <div className="py-5">
      {orderConfirmed ? (
        <h1 className="display-5 fw-bold lh-1 mb-3">Tack för ordern!</h1>
      ) : (
        <>
          <h1 className="display-5 fw-bold lh-1 mb-3">Utcheckning</h1>
          <CheckoutTable basket={basket} />
          <h2 className="display-6 lh-1 mb-3">Kunduppgifter</h2>
          <CheckoutForm checkoutHandler={checkoutHandler} />
        </>
      )}
    </div>
  );
};

export default Checkout;
