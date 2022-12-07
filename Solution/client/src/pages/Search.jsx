import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { getSearchResult } from "../util/api";

const Search = () => {
  let [urlSearchParams] = useSearchParams();
  const [searchResult, setSearchResults] = useState(null);

  const searchTerm = urlSearchParams.get("q");

  useEffect(() => {
    const loadSearchResult = async () => {
      const data = await getSearchResult(searchTerm);
      setSearchResults(data);
    };

    loadSearchResult();
  }, [searchTerm]);

  return searchResult ? (
    <>
      <h2 className="fs-3 text-center">
        {searchResult.length} {searchResult.length === 1 ? "träff" : "träffar"}{" "}
        på {searchTerm}
      </h2>
      {searchResult.map((product) => (
        <article className="d-flex justify-content-center w-100" key={uuid()}>
          <Link
            className="link-dark text-decoration-none row align-items-center my-3 justify-content-center w-100"
            to={`/products/${product.urlSlug}`}
          >
            <div className="col-10 col-sm-8 col-lg-3">
              <img
                src={product.image}
                className="d-block mx-auto img-fluid"
                alt="Produt"
              />
            </div>
            <div className="col-lg-9 d-flex flex-column align-items-start gap-2">
              <h1 className="fs-2 fw-bold lh-1 mb-3">{product.title}</h1>
              <p className="lead">{product.description}</p>
              <div className="fs-4">
                <span className="me-2">{product.price}</span>
                <span className="">SEK</span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </>
  ) : null;
};

export default Search;
