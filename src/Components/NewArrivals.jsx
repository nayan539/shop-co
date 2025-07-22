import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLike } from "../Context/LikeContext";
import newArrivals from "../Objects/NewArrivalsObj";

const truncate = (str,n) => (str.length > n ? str.slice(0, n) + "..." : str);

const NewArrivals = () => {
  const navigate = useNavigate();
  const { likedItems, toggleLike } = useLike();
  const [visibleCount, setVisibleCount] = useState(4);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, newArrivals.length));
  };

  const handleViewAll = () => {
    setVisibleCount(newArrivals.length);
  };

  const [showLikePopup, setShowLikePopup] = useState(false);
const [likePopupMsg, setLikePopupMsg] = useState("");

const handleLike = (product) => {
  const isLiked = likedItems.find(i => i.id === product.id);
  toggleLike(product);
  setLikePopupMsg(isLiked ? "Removed from Liked" : "Added to Liked");
  setShowLikePopup(true);
  setTimeout(() => setShowLikePopup(false), 1200);
};
  return (
    <div className="container mx-auto px-3 sm:px-0">
      <h1 className="text-center tt text-5xl my-10">New Arrivals</h1>
      <div className="grid grid-cols-12 gap-3 md:gap-6">
        {newArrivals.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="col-span-6 lg:col-span-4 xl:col-span-3 dark:border h-80"
          >
            <div
              className="relative cursor-pointer bg-white dark:bg-black dark:text-white p-2 rounded-lg shadow hover:shadow-lg transition h-full"
              onClick={() => navigate(`/productdetails/${product.id}`)}
            >
              {/* Like button */}
              <button
                className="absolute top-2 right-2 z-10"
                onClick={e => {
                  e.stopPropagation();
                  toggleLike(product);
                }}
                aria-label={likedItems.find(i => i.id === product.id) ? "Unlike" : "Like"}
              >
                <i className={`fa-heart text-xl ${likedItems.find(i => i.id === product.id) ? "fa-solid text-pink-500" : "fa-regular text-gray-400"}`}></i>
              </button>
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="my-1 font-bold text-[15px]">
                <span className="block sm:hidden">
                  {truncate(product.title, 16)}
                </span>
                <span className="hidden sm:block">
                  {product.title}
                </span>
              </h2>
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
              <p
                className="text-sm text-gray-500 overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  minHeight: "2.5em",
                  maxHeight: "2.5em"
                }}
              >
                <span className="block sm:hidden">
                  {truncate(product.description, 50)}
                </span>
                <span className="hidden sm:block">
                  {product.description}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 justify-center my-10">
        {visibleCount < newArrivals.length && (
          <button
            className='py-3 rounded-full border-2 border-gray-200 hover:bg-gray-100 w-44 md:w-52 lg:w-60'
            onClick={handleViewMore}
          >
            View More
          </button>
        )}
        {visibleCount < newArrivals.length && (
          <button
            className='py-3 rounded-full border-2 border-gray-200 hover:bg-gray-100 w-44 md:w-52 lg:w-60'
            onClick={handleViewAll}
          >
            View All
          </button>
        )}
      </div>
      
    </div>
  );
};

export default NewArrivals;