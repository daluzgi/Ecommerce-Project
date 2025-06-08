import React from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px",
      }}
    >
      {data.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
