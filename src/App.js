import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import { CartProvider } from "./context/CartContext"

export default function App() {
  return (
    <>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </>
  );
}
