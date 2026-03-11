import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../css/Forms.css";

export default function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const { username, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:8080/login", user);
      localStorage.setItem("userId", result.data.id);
      alert("Login successful");
      navigate("/expenses");
    } catch (error) {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Login</h2>

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

          <button type="submit" className="btn-login">Login</button>

        </form>

        <div className="form-footer">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
}