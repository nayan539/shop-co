import React from "react";
import { useLike } from "../Context/LikeContext";
import { useNavigate } from "react-router-dom";

const Liked = () => {
  const { likedItems, toggleLike } = useLike();
  const navigate = useNavigate();

  if (!likedItems || likedItems.length === 0) {
    return <div className="text-center text-gray-500 mt-10">No liked products yet.</div>;
  }

  return (
    <div className="container mx-auto px-3 sm:px-0">
      <h1 className="text-center tt text-4xl my-10">Liked Products</h1>
      <div className="grid grid-cols-12 gap-3 md:gap-6">
        {likedItems.map((product) => (
          <div
            key={product.id}
            className="col-span-6 lg:col-span-4 xl:col-span-3 dark:border h-80"
            onClick={() => navigate(`/productdetails/${product.id}`)}
          >
            <div className="relative cursor-pointer bg-white dark:bg-black dark:text-white p-2 rounded-lg shadow hover:shadow-lg transition h-full">
              <button
                className="absolute top-2 right-2 z-10"
                onClick={e => { e.stopPropagation(); toggleLike(product); }}
              >
                <i className="fa-solid fa-heart text-xl text-pink-500"></i>
              </button>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="my-1 font-bold text-[15px]">{product.title}</h2>
              <div className="flex items-center my-1">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-gray-600 text-sm">{product.reviews} reviews</span>
              </div>
              <div className="flex gap-2 sm:gap-4 items-center my-1">
                <p className="font-bold text-[15px] md:text-2xl">₹{product.price}</p>
                <p className="font-bold text-[15px] md:text-2xl text-gray-400">
                  <strike>₹{product.mainprice}</strike>
                </p>
                <p className="bg-red-100 text-[10px] px-2 sm:px-3 py-1 rounded-full text-red-500">
                  -{product.discount}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Liked;