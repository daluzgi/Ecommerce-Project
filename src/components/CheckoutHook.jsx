import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { dataBase } from "../service/firebase";
import { useForm } from "react-hook-form";
import "./CheckoutHook.css";

const CheckoutHook = () => {
  const [orderId, setOrderId] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const { cart, getTotalPrice, clear, getTotalQuantity } =
    useContext(CartContext);

  //console.log("Errores", errors);

  const finalizarCompra = (dataDelForm) => {
    //console.log("Todo ok", dataDelForm);

    let order = {
      comprador: {
        name: dataDelForm.name,
        lastname: dataDelForm.lastName,
        adress: dataDelForm.adress,
        email: dataDelForm.email,
      },
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
        <div className="success-box">
          <h2>¡Compra realizada correctamente!</h2>
          <h3>ID de la orden: {orderId}</h3>
        </div>
      ) : (
        <div className="checkout-wrapper">
          <h1>Complete sus datos</h1>

          <form onSubmit={handleSubmit(finalizarCompra)}>
            {/* ——— Nombre ——— */}
            <input
              className="form-control"
              placeholder="Ingrese su nombre"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors?.name?.type === "required" && (
              <span className="error-text">
                Por favor, complete este campo.
              </span>
            )}
            {errors?.name?.type === "minLength" && (
              <span className="error-text">
                El campo debe tener 3 caracteres como mínimo.
              </span>
            )}

            {/* ——— Apellido ——— */}
            <input
              className="form-control"
              placeholder="Ingrese su apellido"
              {...register("lastName", { required: true, minLength: 3 })}
            />
            {errors?.lastName && (
              <span className="error-text">Por favor, revise el apellido.</span>
            )}

            {/* ——— Dirección ——— */}
            <input
              className="form-control"
              placeholder="Ingrese su dirección"
              {...register("adress", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
            />
            {errors?.adress && (
              <span className="error-text">Dirección inválida.</span>
            )}

            {/* ——— Email ——— */}
            <input
              className="form-control"
              type="email"
              placeholder="Ingrese su correo electrónico"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors?.email && (
              <span className="error-text">Correo inválido.</span>
            )}

            {/* ——— Repetir Email ——— */}
            <input
              className="form-control"
              type="email"
              placeholder="Repita su correo electrónico"
              {...register("secondEmail", {
                required: true,
                validate: (m) => m === getValues().email,
              })}
            />
            {errors?.secondEmail && (
              <span className="error-text">Los correos no coinciden.</span>
            )}

            <button className="btn btn-success" type="submit">
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CheckoutHook;
