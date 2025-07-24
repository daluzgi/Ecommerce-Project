import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);
  const totalItems = getTotalQuantity();

  return (
    <Link to="/cart" style={{ position: "relative", display: "inline-block" }}>
      <FiShoppingCart size={24} />
      {totalItems > 0 && (
        <span
          style={{
            position: "absolute",
            top: -8,
            right: -10,
            backgroundColor: "red",
            color: "white",
            borderRadius: "50%",
            padding: "2px 6px",
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
}

export default CartWidget;
