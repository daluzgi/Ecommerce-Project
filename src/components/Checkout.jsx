import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { dataBase } from "../service/firebase";

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [validMail, setValidaMail] = useState("");
  const [orderId, setOrderId] = useState("");
  const { cart, getTotalPrice, clear } = useContext(CartContext);

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };
  console.log(buyer);

  const finalizarCompra = (e) => {
    e.preventDefault();
    let order = {
      comprador: buyer,
      compras: cart,
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    const ventas = collection(dataBase, "orders");
    addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {orderId ? (
        <div>
          <h2>Realizaste la compra correctamente!</h2>
          <h3>El id de la compra es: {orderId}</h3>
        </div>
      ) : (
        <div>
          <h1>Complete con sus datos</h1>
          <form onSubmit={finalizarCompra}>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
              onChange={buyerData}
            ></input>
            <input
              className="form-control"
              type="text"
              name="lastname"
              placeholder="Ingrese su apellido"
              onChange={buyerData}
            ></input>
            <input
              className="form-control"
              type="text"
              name="adress"
              placeholder="Ingrese su direccion"
              onChange={buyerData}
            ></input>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Ingrese su correo electronico"
              onChange={buyerData}
            ></input>
            <input
              className="form-control"
              type="email"
              name="second-email"
              placeholder="Repita su correo electronico"
              onChange={buyerData}
            ></input>
            <button className="btn btn-success" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
