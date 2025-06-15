import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">¡Sorry not sorry!</h1>
      <p className="error-message">Parece que esa página no existe...</p>
      <Link to="/" className="error-link">
        Volver al Home
      </Link>
    </div>
  );
};

export default ErrorPage;
