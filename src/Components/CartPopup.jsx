import React from "react";
import { useCart } from "../Context/CartContext";

const CartPopup = () => {
  const { cartPopup } = useCart();
  return cartPopup.show ? (
    <div className="fixed top-8 right-8 z-50 bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-xl shadow-2xl transition-all duration-500 animate-slide-in font-semibold text-lg flex items-center gap-2">
      <i className="fa-solid fa-circle-check text-white text-2xl"></i>
      {cartPopup.message}
    </div>
  ) : null;
};

export default CartPopup;