import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #e9ecef' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: '1.5rem', color: '#333' }}>
          Full Stack App
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="ms-auto">
            <Link className="btn btn-primary" to="/adduser">Add User</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
