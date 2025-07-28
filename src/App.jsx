import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer";
import Checkout from "./components/Checkout";
import CheckoutHook from "./components/CheckoutHook";
import HeroVideo from "./components/HeroVideo";
import WhatsAppButton from "./components/WhatsappButton/WhatsappButton";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroVideo />
                <ItemListContainer message="Pagina en construccion 🛠" />
              </>
            }
          ></Route>
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer />}
          ></Route>
          <Route
            path="/item/:id"
            element={<ItemDetailContainer></ItemDetailContainer>}
          ></Route>
          <Route path="/cart" element={<CartContainer></CartContainer>}></Route>
          <Route
            path="/checkout"
            element={<CheckoutHook></CheckoutHook>}
          ></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
        <WhatsAppButton />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
