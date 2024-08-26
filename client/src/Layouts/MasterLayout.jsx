import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../store/auth-context";
import SiteFooter from "../components/SiteFooter/SiteFooter";
import SiteHeader from "../components/SiteHeader/SiteHeader";

const MasterLayout = ({ siteHeader, siteFooter }) => {
  const ctxAuth = useContext(AuthContext);
  return (
    <div className="d-flex flex-column min-vh-100">
      <SiteHeader
        logOutHandler={ctxAuth.onLogin}
        isLoggedIn={ctxAuth.isLoggedIn}
        {...siteHeader}
      />
      <div className="container">
        <Outlet />
      </div>
      <SiteFooter {...siteFooter} />
    </div>
  );
};

export default MasterLayout;
