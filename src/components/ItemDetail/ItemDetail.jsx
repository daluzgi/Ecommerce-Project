import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCurrency } from "../../utils/formatPrice";

const ItemDetail = ({ detail }) => {
  const { addItem } = useContext(CartContext);
  const format = useCurrency();

  const [purchase, setPurchase] = useState(false);
  //consumir el contexto
  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
    setPurchase(true);
  };

  return (
    <div className="item-detail-container">
      <h2>Detalle del producto: {detail.name}</h2>
      <img src={detail.img} alt={detail.name} />
      <p>{detail.description}</p>
      <p>Precio: {format(detail.price)}</p>

      <p>Stock disponible: {detail.stock}</p>

      {purchase ? (
        <Link className="btn tbn-dark go-to-cart-btn" to="/cart">
          Ir al carrito
        </Link>
      ) : (
        <ItemCount stock={detail.stock} onAdd={onAdd}></ItemCount>
      )}
    </div>
  );
};

export default ItemDetail;
