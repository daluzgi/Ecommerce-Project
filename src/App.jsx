// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";
import CheckoutHook from "./components/CheckoutHook";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import WhatsAppButton from "./components/WhatsappButton/WhatsappButton";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          {/* HOME con Hero + secciones */}
          <Route path="/" element={<Home />} />
          {/* Ver todos los productos */}
          <Route path="/products" element={<ItemListContainer />} />{" "}
          {/* Catálogo y detalle */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          {/* Carrito y checkout */}
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutHook />} />
          {/* 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        {/* Botón flotante de WhatsApp */}
        <WhatsAppButton />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
