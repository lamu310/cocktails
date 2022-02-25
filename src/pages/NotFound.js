import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-container">
      <h1>oops! it's a dead end</h1>
      <Link to="/about" className="btn btn-primary">
        Back About
      </Link>
    </div>
  );
};

export default NotFound;
