import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top shadow-sm">
      <div className="container-fluid px-4">
        <Link to="/" className="navbar-brand fw-bold fs-4">
          Admin Dashboard
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/admin/photos" className="nav-link px-3">
                Photos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/newarrivals" className="nav-link px-3">
                New Arrivals
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/choices" className="nav-link px-3">
                Choices
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/popularitems" className="nav-link px-3">
                Popular Items
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
