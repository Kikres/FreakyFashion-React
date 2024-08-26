import React from "react";
import { v4 as uuid } from "uuid";

const SiteFooterMenuList = (props) => {
  return (
    <div className="d-flex flex-column flex-sm-row gap-5 container">
      {props.menuList.map((element) => (
        <div className="" key={uuid()}>
          <div className="mb-3">
            <span className="fs-5">{element.title}</span>
          </div>
          <ul className="nav flex-column">
            {element.links.map((link) => (
              <li key={uuid()}>
                <a className="nav-link text-secondary px-0" href={link.link}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SiteFooterMenuList;
