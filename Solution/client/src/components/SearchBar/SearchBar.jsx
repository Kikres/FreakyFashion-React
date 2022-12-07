import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <form className="d-flex me-3" onSubmit={submitHandler}>
      <input
        className="form-control me-2"
        placeholder="Sök produkt"
        id="q"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="btn btn-outline-dark">Sök</button>
    </form>
  );
};

export default SearchBar;
