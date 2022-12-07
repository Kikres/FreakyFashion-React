import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const PopularProducts = (props) => {
  return (
    <section className="py-3">
      <h2 className="display-6 fw-bold lh-1 mb-3 text-center py-4">
        {props.title}
      </h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {props.products.map((element) => (
          <article className="col" key={uuid()}>
            <div className="card">
              <img src={element.image} className="card-img-top" alt="Product" />
              <Link
                className="card-body d-flex justify-content-between link text-decoration-none link-dark"
                to={`/products/${element.urlSlug}`}
              >
                <span className="card-text">{element.title}</span>
                <span className="card-text">{element.price} SEK</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
