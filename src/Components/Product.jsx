import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useLike } from '../Context/LikeContext'
import productimg from "../assets/imgs/pr-img.png"
import Stars from './Stars'

const Product = () => {
    const navigate = useNavigate();

  const { likedItems, toggleLike } = useLike();
  const [showLikePopup, setShowLikePopup] = useState(false);
  const [likePopupMsg, setLikePopupMsg] = useState("");

    return (
        <>
            <div onClick={() => navigate('/productdetails')} className="cursor-pointer relative product-card">
                <img src={productimg} alt="" />
                <p className='my-3 font-bold'>T-SHIRT WITH TAPE DETAILS</p>
                <Stars/>
                <div className='flex gap-2 sm:gap-4 items-center my-3'>
                    <p className='font-bold text-xl md:text-3xl'>$120</p>
                    <p className='font-bold text-xl md:text-3xl text-gray-400 '> <strike>$140</strike></p>
                    <p className='bg-red-100 px-2 sm:px-3 py-1 rounded-full text-red-500'>-20%</p>
                </div>
    <button
  type="button"
  onClick={e => {
    e.stopPropagation();
    toggleLike(product);
    setLikePopupMsg("Added to Liked");
    setShowLikePopup(true);
    setTimeout(() => setShowLikePopup(false), 1200);
  }}
>
  <i className="fa-heart"></i>
</button>

{showLikePopup && (
  <div className="fixed top-8 right-8 z-50 bg-white border border-red-400 text-red-500 px-6 py-3 rounded-xl shadow-2xl transition-all duration-500 animate-slide-in font-semibold text-base flex items-center gap-2">
    <i className="fa-solid fa-heart text-red-500 text-xl"></i>
    {likePopupMsg}
  </div>
)}
            </div>
        </>
    )
}

export default Product