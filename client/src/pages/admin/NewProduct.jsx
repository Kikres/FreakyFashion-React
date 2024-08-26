import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveProduct } from "../../util/api";

const NewProduct = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [price, setPrice] = useState();
  const navigation = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    saveProduct({ title, description, imageUrl, price });
    navigation("/admin/products");
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Ny Produkt</h1>
      </div>
      <form className="row g-3" onSubmit={submitHandler}>
        <div className="row pt-3">
          <div className="col-md-6">
            <label className="form-label">Namn</label>
            <input
              className="form-control"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-6">
            <label className="form-label">Beskrivning</label>
            <textarea
              className="form-control"
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-6">
            <label className="form-label">Bild (URL)</label>
            <input
              type="url"
              className="form-control"
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-md-6">
            <label className="form-label">Pris</label>
            <input
              type="number"
              className="form-control"
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
        </div>
        <div className="row pt-3">
          <div className="col-12">
            <button type="submit" className="btn btn-primary ">
              Lägg till
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewProduct;
