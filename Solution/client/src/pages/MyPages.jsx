import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import { getCustomer } from "../util/api";
import AuthContext from "../store/auth-context";

const MyPages = () => {
  const ctxAuth = useContext(AuthContext);
  const [customerInfo, setCustomerInfo] = useState(null);

  const getCustomerInfo = async () => {
    const data = await getCustomer(ctxAuth.email);
    setCustomerInfo(data);
  };

  if (!customerInfo) {
    getCustomerInfo();
  }

  return customerInfo ? (
    <div className="py-5">
      <h1 className="display-6 fw-bold lh-1 mb-3 mb-5 text-center">
        {`${customerInfo.firstName} ${customerInfo.lastName}`}
      </h1>
      <h2 className="fs-3 lh-1 mb-3">Mina ordrar</h2>
      <hr />
      <table className="table table-borderless">
        <thead className="text-secondary fs-6">
          <tr>
            <th scope="col">Ordernr.</th>
            <th className="text-left" scope="col">
              Datum
            </th>
            <th className="text-end" scope="col">
              Totalt
            </th>
          </tr>
        </thead>
        <tbody>
          {customerInfo.orders.map((order, index) => (
            <tr key={uuid()}>
              <td>{index + 1}</td>
              <td className="text-left">{order.date}</td>
              <td className="text-end">
                {order.items.reduce((acc, curr) => {
                  return acc + curr.product.price * curr.quantity;
                }, 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : null;
};

export default MyPages;
