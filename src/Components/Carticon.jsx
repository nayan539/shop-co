import React from "react";
import { useCart } from "../Context/CartContext";
import { NavLink } from "react-router-dom";

const CartIcon = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <NavLink to="/cart" className="relative">
        <i className="fa-solid fa-cart-shopping text-2xl"></i>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-[4px] w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </NavLink>
    </div>
  );
};

export default CartIcon;