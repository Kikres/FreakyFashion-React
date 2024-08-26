import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  email: "",
  onLogout: () => {},
  onLogin: (email, password) => {},
  onNewUser: (email) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState(null);

  //3h expiration
  const setCookie = (cname, cvalue) => {
    const d = new Date();
    d.setTime(d.getTime() + 3 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  const clearCookie = (cname) => {
    document.cookie = cname + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
  };

  const loginHandler = async (email, password) => {
    const response = await fetch("http://localhost:5000/customers", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      setCookie("user", JSON.stringify({ email }));
      setIsLoggedIn(true);
      setEmail(email);
    }
  };

  const logoutHandler = () => {
    clearCookie("user");
    setIsLoggedIn(false);
    setEmail("");
  };

  const newUser = (email) => {
    setIsLoggedIn(true);
    setEmail(email);
    setCookie("user", JSON.stringify({ email }));
  };

  useEffect(() => {
    const cookie = getCookie();
    if (cookie) {
      setIsLoggedIn(true);
      setEmail(cookie.email);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        email: email,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        onNewUser: newUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
