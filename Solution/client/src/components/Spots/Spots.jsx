import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Spots = (props) => {
  return (
    <section className="d-flex justify-content-center gap-2 pb-5">
      {props.spots.map((element) => (
        <Link key={uuid()} to={element.link}>
          <div className="card bg-dark text-dark border-0">
            <img className="card-img" src={element.imageUrl} alt="Spot" />
            <div className="card-img-overlay d-flex justify-content-center align-items-center">
              <h3 className="card-title">{element.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Spots;
