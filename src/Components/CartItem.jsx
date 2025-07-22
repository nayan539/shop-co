import React from "react";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const { cartItems, increment, decrement, remove } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return <p className="text-gray-500 my-10 text-center font-bold">Your cart is empty.</p>;
  }

  // Calculate subtotal, discount, delivery, total as before...
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const delivery = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + delivery;

  return (
    <div className="grid grid-cols-12 gap-3 container mx-auto">
      <div className="col-span-12 md:col-span-8 ">
        <div className="container mx-auto border rounded-lg">
          {cartItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <div
                className="flex items-center gap-4 cursor-pointer"
                onClick={() => navigate(`/productdetails/${item.id}`)}
              >
                <img
                  className="w-24 h-24 object-cover"
                  src={item.images[0]}
                  alt=""
                  onClick={e => e.stopPropagation()}
                />
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{item.title}</p>
                    <i
                      className="fa-solid fa-trash cursor-pointer text-red-500"
                      onClick={e => { e.stopPropagation(); remove(idx); }}
                    ></i>
                  </div>
                  <p>Color: {item.selectedColor}</p>
                  <p>Size: {item.selectedSize}</p>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-xl">₹{item.price}</p>
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-gray-200 p-1 rounded"
                        onClick={e => { e.stopPropagation(); decrement(idx); }}
                        disabled={item.quantity <= 1}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-gray-200 p-1 rounded"
                        onClick={e => { e.stopPropagation(); increment(idx); }}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-3" />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="col-span-12 md:col-span-4 border rounded-lg px-5">
        <p className="font-semibold my-3">Order Summary</p>
        <div className="flex justify-between my-2">
          <p className="text-gray-500 font-light">Subtotal</p>
          <p className="font-bold">₹{subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="text-gray-500 font-light">Discount (-20%)</p>
          <p className="font-bold text-red-600">-₹{discount.toFixed(2)}</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="text-gray-500 font-light">Delivery Fee</p>
          <p className="font-bold">₹{delivery.toFixed(2)}</p>
        </div>
        <hr className="my-5"/>
        <div className="flex justify-between">
          <p className="text-gray-500 font-light">Total</p>
          <p className="font-bold">₹{total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;