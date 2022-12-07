import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const SiteHeaderLinks = (props) => {
  return (
    <div className="my-auto fs-4 text-center d-flex gap-3">
      {props.links.map((element) => (
        <Link
          key={uuid()}
          to={element.url}
          className="link link-dark text-decoration-none fs-6"
        >
          {element.name}
        </Link>
      ))}
    </div>
  );
};

export default SiteHeaderLinks;
