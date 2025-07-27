import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./CartView.css";
import { useCurrency } from "../../utils/formatPrice";

const CartView = () => {
  const { cart, clear, removeItem, getTotalPrice, getTotalQuantity } =
    useContext(CartContext);
  const format = useCurrency();

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

  if (getTotalQuantity() === 0) {
    return (
      <div className="empty-cart">
        <h2>Tu carrito está vacío 🛒</h2>
        <p>¡Agregá productos y volvé para finalizar tu compra!</p>
        <Link to="/" className="btn btn-primary mt-3">
          Volver a la tienda
        </Link>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Carrito vacío"
          className="empty-cart-img"
        />
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>
      <div>
        {cart.map((compra) => (
          <div className="cart-item" key={compra.id}>
            <img src={compra.img} alt={compra.name} className="cart-img" />
            <span>{compra.name}</span>
            <span>{format(compra.price)}</span>
            <span>{compra.quantity}</span>
            <span>Precio final: ${compra.price * compra.quantity},00</span>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(compra.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <span className="cart-total">
        Total a pagar: {format(getTotalPrice())}
      </span>

      <div className="cart-actions">
        <button className="btn btn-danger" onClick={handleClearCart}>
          Vaciar carrito
        </button>
        <Link className="btn btn-success" to="/checkout">
          Terminar compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;
