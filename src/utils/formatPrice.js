// src/hooks/useCurrency.js
import { useCallback } from "react";

export const useCurrency = () => {
  const formatter = useCallback(
    (value) =>
      new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2,
      })
        .format(value)
        .replace(/\u00A0/, ""),
    []
  );

  return formatter;
};
