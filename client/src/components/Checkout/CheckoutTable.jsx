import React from "react";
import { v4 as uuid } from "uuid";

const CheckoutTable = (props) => {
  return (
    <table className="table table-borderless">
      <thead className="text-secondary fs-6">
        <tr>
          <th scope="col"></th>
          <th className="text-center" scope="col">
            Antal
          </th>
          <th className="text-center" scope="col">
            Totalt
          </th>
        </tr>
      </thead>
      <tbody>
        {props.basket.map((basketItem) => (
          <tr key={uuid()}>
            <td>{basketItem.product.title}</td>
            <td className="text-center">{basketItem.quantity}</td>
            <td className="text-center">
              {basketItem.product.price * basketItem.quantity}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CheckoutTable;
