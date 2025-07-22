import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartPopup, setCartPopup] = useState({ show: false, message: "" });

  const addToCart = (item) => {
    const idx = cartItems.findIndex(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.selectedColor === item.selectedColor &&
        cartItem.selectedSize === item.selectedSize
    );
    if (idx > -1) {
      // Already in cart: increase quantity
      setCartItems((prev) =>
        prev.map((cartItem, i) =>
          i === idx
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      );
      setCartPopup({ show: true, message: "Item is already in cart, quantity increased!" });
    } else {
      // Not in cart: add new
      setCartItems((prev) => [...prev, item]);
      setCartPopup({ show: true, message: "Added to cart!" });
    }
    setTimeout(() => setCartPopup({ show: false, message: "" }), 1500);
  };

  const increment = (idx) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (idx) => {
    setCartItems((prev) =>
      prev.map((item, i) =>
        i === idx && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const remove = (idx) => {
    setCartItems((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increment, decrement, remove, cartPopup }}>
      {children}
    </CartContext.Provider>
  );
};