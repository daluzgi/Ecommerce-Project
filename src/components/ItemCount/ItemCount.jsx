import React, { useEffect, useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);
  const [compra, setCompra] = useState(false);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const comprarItem = () => {
    setCompra(!compra);
    onAdd(count);
  };

  useEffect(() => {
    //console.log("Me ejecuto");
  }, [compra]);

  return (
    <div className="item-count-container">
      <div className="counter-controls">
        <button className="btn btn-danger" onClick={restar}>
          -
        </button>
        <span className="btn">{count}</span>
        <button className="btn btn-success" onClick={sumar}>
          +
        </button>
      </div>
      {count > 0 && (
        <button className="comprar-btn" onClick={comprarItem}>
          Comprar
        </button>
      )}
    </div>
  );
};

export default ItemCount;
