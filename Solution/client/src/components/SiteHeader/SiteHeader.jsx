import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import SiteHeaderIcons from "./SiteHeaderIcons";
import SiteHeaderLinks from "./SiteHeaderLinks";

const SiteHeader = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link to="/" className="navbar-brand">
          FreakyFashion
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <SiteHeaderLinks links={props.links} />
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            <SearchBar />
            <SiteHeaderIcons icons={props.icons} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
