import React from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome to Expense Tracker</h1>
        <p>Track and manage your expenses easily and efficiently.</p>

        <div className="home-buttons">
          <Link className="home-btn-login" to="/login">
            Login
          </Link>
          <Link className="home-btn-signup" to="/register">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}