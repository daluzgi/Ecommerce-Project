import React from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../utils/formatPrice";

const Item = ({ product }) => {
  const { name, price, img, id } = product;
  const format = useCurrency();

  return (
    <div
      className="card"
      style={{
        width: "250px",
        minHeight: "400px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
    >
      <img
        src={img}
        className="card-img-top"
        alt={name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>{format(price)}</p>
        <Link to={"/item/" + id} className="btn btn-primary">
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default Item;
