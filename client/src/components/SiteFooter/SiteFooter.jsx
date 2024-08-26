import React from "react";
import SiteFooterIconList from "./SiteFooterIconList";
import SiteFooterMenuList from "./SiteFooterMenuList";

const SiteFooter = (props) => {
  return (
    <footer className="footer mt-auto pt-3 bg-light">
      <SiteFooterIconList iconList={props.iconList} />
      <SiteFooterMenuList menuList={props.menuList} />
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Copyright: FreakyFashion
      </div>
    </footer>
  );
};

export default SiteFooter;
