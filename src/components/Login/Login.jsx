import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { handleLogin, handleLogout, handleGoogleLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    handleLogin(email, password)
      .then((res) => {})
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Email
          <input
            name="email"
            type="email"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <div>
          Password
          <input
            name="password"
            type="password"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>

        <button type="submit">Login</button>
        <p>
          Don't have an accoutn? <NavLink to="/register">Register</NavLink>
        </p>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <button onClick={handleGoogleLogin}>Google Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default Login;
