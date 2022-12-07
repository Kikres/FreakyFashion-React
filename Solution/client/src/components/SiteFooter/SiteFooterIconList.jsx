import React from "react";
import { v4 as uuid } from "uuid";

const SiteFooterIconList = (props) => {
  return (
    <div className="container row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 fs-2 mx-auto pt-3 pb-5">
      {props.iconList.map((element) => (
        <div className="col" key={uuid()}>
          <i className={`fa-regular ${element.className}`}></i>
          <span className="text-secondary fs-5">{element.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SiteFooterIconList;
