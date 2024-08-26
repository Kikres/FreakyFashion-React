import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const SiteHeaderIcons = (props) => {
  const navigation = useNavigate();
  const ctxAuth = useContext(AuthContext);
  const onLogoutHandler = () => {
    ctxAuth.onLogout();
    navigation("/");
  };

  return (
    <div className="my-auto fs-4 text-center d-flex gap-3">
      <Link to="/checkout" className="position-relative">
        <i className="fa-regular fa-cart-shopping link-dark text-decoration-none"></i>
      </Link>
      {!ctxAuth.isLoggedIn && (
        <Link to="/login">
          <i className="fa-solid fa-right-to-bracket link-dark text-decoration-none py-0"></i>
        </Link>
      )}
      {ctxAuth.isLoggedIn && (
        <>
          <Link to="/myPages">
            <i className="fa-solid fa-user link-dark text-decoration-none py-0"></i>
          </Link>
          <button
            onClick={onLogoutHandler}
            className="border-0 bg-transparent p-0"
          >
            <i className="fa-solid fa-right-from-bracket my-auto"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default SiteHeaderIcons;
