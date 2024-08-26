import React from "react";
import { useState } from "react";

const CheckoutForm = ({ checkoutHandler }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    checkoutHandler({ firstName, lastName, email, password });
  };

  return (
    <form onSubmit={submitHandler}>
      <div asp-validation-summary="ModelOnly" className="text-danger"></div>
      <div className="row g-2 mb-2">
        <div className="form-floating col-6">
          <input
            className="form-control"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label>Förnamn</label>
        </div>
        <div className="form-floating col-6">
          <input
            className="form-control"
            onChange={(event) => setLastName(event.target.value)}
          />
          <label>Efternamn</label>
        </div>
      </div>
      <div className="row g-2 mb-2">
        <div className="form-floating col-6 mb-2">
          <input
            className="form-control"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <label>E-Post</label>
        </div>
        <div className="form-floating col-6 mb-2">
          <input
            className="form-control"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <label>Lösenord</label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Köp
      </button>
    </form>
  );
};

export default CheckoutForm;
