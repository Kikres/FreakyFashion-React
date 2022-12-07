import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../util/api";
import BasketContext from "../store/basket-context";

const ProductDetails = ({ products, addProductToStore }) => {
  const [added, setAdded] = useState(false);
  const ctxBasket = useContext(BasketContext);

  let { slug } = useParams();
  const product = Object.values(products).find((x) => x.urlSlug === slug);

  const loadProduct = async (slug) => {
    const data = await getProduct(slug);
    addProductToStore(data);
  };

  if (!product) {
    loadProduct(slug);
  }

  const addToCartHandler = (event) => {
    event.preventDefault();
    ctxBasket.onAddToBasket(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return product ? (
    <article className="py-5 d-flex justify-content-center w-100">
      <div className="row align-items-center g-5 py-5 justify-content-center">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={product.image}
            className="d-block mx-lg-auto img-fluid"
            alt="Product"
          />
        </div>
        <div className="col-lg-6 d-flex flex-column align-items-center gap-2">
          <h1 className="display-5 fw-bold lh-1 mb-3">{product.title}</h1>
          <p className="lead">{product.description}</p>
          <div className="align-self-start fs-4">
            <span className="me-2">{product.price}</span>
            <span className="">SEK</span>
          </div>
          <div className="d-grid gap-2 align-self-start mt-2 buttonContainer">
            {added ? (
              <button className="btn btn-success px-4 fs-5" disabled>
                Tillagd!
              </button>
            ) : (
              <button
                className="btn btn-outline-dark px-4 fs-5"
                onClick={addToCartHandler}
              >
                Lägg till i varukorgen
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  ) : null;
};

export default ProductDetails;
