import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../Objects/ProductsObj";
import newArrivals from "../Objects/NewArrivalsObj";
import Stars from "../Components/Stars";
import NewsLater from "../Components/NewsLater";
import { useCart } from "../Context/CartContext";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product =
    products.find((p) => String(p.id) === String(id)) ||
    newArrivals.find((p) => String(p.id) === String(id));
  
  console.log("id from URL:", id);
  console.log("product found:", product);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.size?.[0] || "");
  const { addToCart } = useCart();
  const [showPopup, setShowPopup] = useState(false);

  if (!product) {
    return <div className="text-center text-red-500 mt-10">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity,
    });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1200);
  };

  const handleDecrease = () => setQuantity(q => (q > 1 ? q - 1 : 1));
  const handleIncrease = () => setQuantity(q => q + 1);

  return (
    <div>
      <div className="container mx-auto px-3 sm:px-0">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6">
            <div className="w-full h-full flex gap-3 p-1">
              <div className="w-[30%] flex flex-col justify-between gap-3">
                {product.images.slice(0, 3).map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg overflow-hidden border">
                    <img className="object-cover w-full h-full" src={img} alt="" />
                  </div>
                ))}
              </div>
              <div className="w-[70%] aspect-square rounded-lg overflow-hidden border">
                <img className="object-cover w-full h-full" src={product.images[3] || product.images[0]} alt="" />
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <h1 className="tt text-4xl font-bold">{product.title}</h1>
            <div className="flex items-center mb-2">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-gray-600 text-sm">{product.reviews} reviews</span>
              </div>
            <div className="flex gap-2 sm:gap-4 items-center my-3">
              <p className="font-bold text-xl md:text-3xl">₹{product.price}</p>
              <p className="font-bold text-xl md:text-3xl text-gray-400 ">
                <strike>₹{product.mainprice}</strike>
              </p>
              <p className="bg-red-100 px-2 sm:px-3 py-1 rounded-full text-red-500">
                -{product.discount}%
              </p>
            </div>
            <p className="text-xl">{product.description}</p>
            <hr className="my-5" />
            <div>
              <p className="text-xs">Select Colors</p>
              <div className="flex gap-3 my-2">
                {product.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className={`flex justify-center items-center w-8 h-8 rounded-full border border-gray-400 cursor-pointer ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  >
                    {selectedColor === color && <i className="fa-solid fa-check text-white"></i>}
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-5" />
            <div>
              <p className="text-xs">Choose Size</p>
              <div className="flex flex-wrap gap-2 my-3">
                {product.size.map((size, idx) => (
                  <button
                    key={idx}
                    className={`border border-gray-300 rounded-lg px-3 py-1 text-xs md:text-base hover:bg-black hover:text-white ${selectedSize === size ? "bg-black text-white" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <hr className="my-5" />
            <div className="flex justify-between gap-2 md:gap-6">
              <div className="flex justify-between items-center gap-2 rounded-full w-60 py-2 px-4 my-3 bg-[#F0F0F0] border">
                <button type="button" onClick={handleDecrease}><i className="fa-solid fa-minus"></i></button>
                <p>{quantity}</p>
                <button type="button" onClick={handleIncrease}><i className="fa-solid fa-plus"></i></button>
              </div>
              <button
                className="bg-black text-white w-full text-center rounded-full py-2 my-3"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              <button className="bg-black text-white w-full text-center rounded-full py-2 my-3">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Popup Animation */}
      {showPopup && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-500 z-50 animate-bounce">
          Added to cart!
        </div>
      )}
      <NewsLater />
    </div>
  );
};

export default ProductDetailsPage;