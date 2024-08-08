import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          Admin Dashboard
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/admin/photos"
              className="text-white hover:text-gray-200 transition duration-200"
            >
              Photos
            </Link>
          </li>
          <li>
            <Link
              to="/admin/newarrivals"
              className="text-white hover:text-gray-200 transition duration-200"
            >
              New Arrivals
            </Link>
          </li>
          <li>
            <Link
              to="/admin/choices"
              className="text-white hover:text-gray-200 transition duration-200"
            >
              Choices
            </Link>
          </li>
          <li>
            <Link
              to="/admin/popularitems"
              className="text-white hover:text-gray-200 transition duration-200"
            >
              Popular Items
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
