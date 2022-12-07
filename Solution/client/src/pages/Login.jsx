import React, { useState, useContext } from "react";
import AuthContext from "../store/auth-context";

const Login = () => {
  const ctxAuth = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    ctxAuth.onLogin({ email, password });
  };

  return (
    <div className="login-form container">
      <form onSubmit={submitHandler}>
        <h3 className="text-center pt-4 pb-2">Logga in</h3>
        <div className="w-50 mx-auto">
          <div className="mb-3">
            <label className="form-label">E-post</label>
            <input
              className="form-control"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Lösenord</label>
            <input
              className="form-control"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Logga in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
