import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, clear, removeItem, getTotalPrice, getTotalQuantity } =
    useContext(CartContext);
  //console.log(getTotalPrice());

  const handleClearCart = () => {
    Swal.fire({
      title: "¿Estás segura?",
      text: "Esto eliminará todos los productos del carrito.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, vaciar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
        Swal.fire(
          "Carrito vacío",
          "Tu carrito fue vaciado exitosamente.",
          "success"
        );
      }
    });
  };

  return (
    <div>
      <h2>Tu carrito</h2>
      <div>
        {cart.map((compra) => {
          return (
            <div
              key={compra.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "2rem",
              }}
            >
              <img
                src={compra.img}
                alt={compra.name}
                style={{ width: "10rem" }}
              ></img>
              <span>{compra.name}</span>
              <span>${compra.price}</span>
              <span>{compra.quantity}</span>
              <span>Precio final: ${compra.price * compra.quantity},00</span>
              <button
                className="btn btn-danger"
                onClick={() => removeItem(compra.id)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        Total a pagar: ${getTotalPrice()},00
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          padding: "2rem",
        }}
      >
        <button className="btn btn-danger" onClick={handleClearCart}>
          Vaciar carrito
        </button>
        {getTotalQuantity() > 0 && (
          <Link className="btn btn-success" to="/checkout">
            Terminar compra
          </Link>
        )}
        {/* <Link
          className="btn btn-success"
          to="/checkout"
          disabled={getTotalQuantity() === 0}
        >
          Terminar compra
        </Link> */}
      </div>
    </div>
  );
};

export default CartView;
