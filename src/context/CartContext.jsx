import { createContext, useState, useEffect } from "react";

//Creamos el contexto
//Se le puede dar un valor por default
export const CartContext = createContext();

//Crear proveedor: da acceso y tiene toda la funcion
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //datos y logica del carrito
  //funciones que modifiquen cart

  useEffect(() => {
    console.log("Cart actualizado:", cart);
    console.log("La cantidad total es:", getTotalQuantity());
    console.log("El total a pagar es:", getTotalPrice());
  }, [cart]);

  const addItem = (item, cantidad) => {
    if (isInCart(item.id, cantidad)) {
      //console.log("Esta en el carrito");
      const carritoActualizado = cart.map((prod) => {
        if (item.id === prod.id) {
          return { ...prod, quantity: prod.quantity + cantidad };
        } else {
          return prod;
        }
      });
      setCart(carritoActualizado);

      //Sumar
    } else {
      console.log("Entre al else");
      setCart([...cart, { ...item, quantity: cantidad }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  //Creadas por mi
  //cantidadDeItems(): sumar cantidades de los items
  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  //totalAPagar(): cuanto tiene que pagar la persona
  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
