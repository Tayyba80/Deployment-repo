// src/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
      <p>Click below to view the products:</p>
      <Link to="/products">
        <button>View Products</button>
      </Link>
    </div>
  );
}

export default Dashboard;
