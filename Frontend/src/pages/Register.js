import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../css/Forms.css";

export default function Register() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    fullname: ""
  });

  const { username, password, email, fullname } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/register", user);
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Register</h2>

        <form onSubmit={onSubmit}>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              value={fullname}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={onInputChange}
              required
            />
          </div>

          <button type="submit" className="btn-register">Register</button>

        </form>

        <div className="form-footer">
          Already have an account? <Link to="/">Login here</Link>
        </div>
      </div>
    </div>
  );
}