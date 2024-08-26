import React from "react";
import { Link } from "react-router-dom";
import ProductTable from "../../components/ProductTable/ProductTable";

const Products = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Produkter</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to="/admin/products/new"
            className="btn btn-sm btn-outline-secondary fs-6"
          >
            Ny Produkt
          </Link>
        </div>
      </div>
      <ProductTable />
    </>
  );
};

export default Products;
