import React, { useState, useEffect } from "react";
import { getProducts } from "../../util/api";
import { v4 as uuid } from "uuid";

const ProductTable = () => {
  const [produts, setProducts] = useState();

  useEffect(() => {
    const loadProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    loadProducts();
  }, []);

  return produts ? (
    <table className="table table-borderless">
      <thead className="text-secondary fs-6">
        <tr>
          <th scope="col">Namn</th>
          <th className="text-center" scope="col">
            Pris
          </th>
        </tr>
      </thead>
      <tbody>
        {produts.map((product) => (
          <tr key={uuid()}>
            <td>{product.title}</td>
            <td className="text-center">{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};

export default ProductTable;
