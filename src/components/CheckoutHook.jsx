import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { dataBase } from "../service/firebase";
import { useForm } from "react-hook-form";

const CheckoutHook = () => {
  const [orderId, setOrderId] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const { cart, getTotalPrice, clear } = useContext(CartContext);

  console.log("Errores", errors);

  const finalizarCompra = (dataDelForm) => {
    console.log("Todo ok", dataDelForm);

    let order = {
      //comprador: buyer,
      compras: cart,
      total: getTotalPrice(),
      date: serverTimestamp(),
    };

    // const ventas = collection(dataBase, "orders");
    // addDoc(ventas, order)
    //   .then((res) => {
    //     setOrderId(res.id);
    //     clear();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
          <form onSubmit={handleSubmit(finalizarCompra)}>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
              {...register("name", { required: true, minLength: 3 })}
            ></input>
            {errors?.name?.type === "required" && (
              <span style={{ color: "red" }}>
                Por favor, complete este campo.
              </span>
            )}
            {errors?.name?.type === "minLength" && (
              <span style={{ color: "red" }}>
                El campo debe tener 3 caracteres como mínimo.
              </span>
            )}
            <input
              className="form-control"
              type="text"
              name="lastname"
              placeholder="Ingrese su apellido"
              {...register("lastName", { required: true, minLength: 3 })}
            ></input>
            {errors?.lastName?.type === "required" && (
              <span style={{ color: "red" }}>
                Por favor, complete este campo.
              </span>
            )}
            {errors?.lastName?.type === "minLength" && (
              <span style={{ color: "red" }}>
                El campo debe tener 3 caracteres como mínimo.
              </span>
            )}
            <input
              className="form-control"
              type="text"
              name="adress"
              placeholder="Ingrese su direccion"
              {...register("adress", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
            ></input>
            {errors?.adress?.type === "required" && (
              <span style={{ color: "red" }}>
                Por favor, complete este campo.
              </span>
            )}
            {errors?.adress?.type === "minLength" && (
              <span style={{ color: "red" }}>
                El campo debe tener 10 caracteres como mínimo.
              </span>
            )}
            {errors?.adress?.type === "maxLength" && (
              <span style={{ color: "red" }}>
                El campo debe tener 20 caracteres como máximo.
              </span>
            )}
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Ingrese su correo electronico"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
              })}
            ></input>
            {errors?.email?.type === "required" && (
              <span style={{ color: "red" }}>
                Por favor, complete este campo.
              </span>
            )}
            {errors?.email?.type === "pattern" && (
              <span style={{ color: "red" }}>
                El correo debe tener el formado mimail@ejemplo.com
              </span>
            )}
            <input
              className="form-control"
              type="email"
              name="secondEmail"
              placeholder="Repita su correo electronico"
              {...register("secondEmail", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
                validate: {
                  equalsMails: (mail2) => mail2 === getValues().email,
                },
              })}
            ></input>
            {errors?.secondEmail?.type === "required" && (
              <span style={{ color: "red" }}>
                Por favor, complete este campo.
              </span>
            )}
            {errors?.secondEmail?.type === "pattern" && (
              <span style={{ color: "red" }}>
                El correo debe tener el formado mimail@ejemplo.com
              </span>
            )}
            {errors?.secondEmail?.type === "equalsMails" && (
              <span style={{ color: "red" }}>Los correos no coinciden.</span>
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
