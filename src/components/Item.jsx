import React from "react";

const Item = ({ product }) => {
  const { name, price, img } = product;

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
        <p className="card-text">${price},00</p>
        <a href="#" className="btn btn-primary">
          Ver mas
        </a>
      </div>
    </div>
  );
};

export default Item;
