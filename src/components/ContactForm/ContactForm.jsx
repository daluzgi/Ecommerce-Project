// src/components/ContactForm.jsx
import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "./ContactForm.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE; // service_nn2q1f2
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE; // template_mqc87lm
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC; // -uiAHa2t6Kqf5FdPb

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setSending(true);

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...data,
          date: new Date().toLocaleString("es-AR"),
        },
        { publicKey: PUBLIC_KEY }
      );

      await Swal.fire(
        "¡Mensaje enviado!",
        "Te responderemos pronto 😊",
        "success"
      );
      reset();
    } catch (err) {
      console.error(err);
      Swal.fire("Ups", "No se pudo enviar. Intentalo más tarde.", "error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-wrapper rounded-4 shadow p-4">
      <h2 className="mb-4 text-center">Contacto</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
        <div className="col-md-6">
          <input
            className="form-control"
            placeholder="Nombre"
            {...register("name", { required: true, minLength: 3 })}
          />
          {errors.name && (
            <span className="error-text">Ingresa tu nombre.</span>
          )}
        </div>

        <div className="col-md-6">
          <input
            className="form-control"
            type="email"
            placeholder="Correo electrónico"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && <span className="error-text">Email inválido.</span>}
        </div>

        <div className="col-md-6">
          <input
            className="form-control"
            placeholder="Teléfono (opcional)"
            {...register("phone", {
              pattern: /^\d{10,15}$/,
            })}
          />
        </div>

        <div className="col-12">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Tu mensaje"
            {...register("message", { required: true, minLength: 10 })}
          />
          {errors.message && (
            <span className="error-text">Escribe al menos 10 caracteres.</span>
          )}
        </div>

        <div className="col-12 text-center">
          <button className="btn btn-primary px-5" disabled={sending}>
            {sending ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
    </div>
  );
}
