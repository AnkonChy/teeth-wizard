import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { handleRegister, manageProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.conPassword.value;
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    }
    if (password !== conPassword) {
      setError("Password didn't match");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("password must contain at least one Uppercase letter");
      return;
    }
    console.log(name, image, email, password, conPassword);

    handleRegister(email, password).then((res) => {
      manageProfile(name, image);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            required
          />
        </div>
        <div>
          Image
          <input
            name="image"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            required
          />
        </div>
        <div>
          Email
          <input
            name="email"
            type="email"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            required
          />
        </div>
        <div>
          Password
          <input
            name="password"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            required
          />
        </div>
        <div>
          Confirm Password
          <input
            name="conPassword"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Register;
