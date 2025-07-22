import React from 'react'
import gucci from "../assets/imgs/gucci.png"
import calvin from "../assets/imgs/calvin.png"
import prada from "../assets/imgs/prada.png"
import versace from "../assets/imgs/versace.png"
import zara from "../assets/imgs/zara.png"

const images = [versace, zara, gucci, prada, calvin];

const Companies = () => {
  return (
    <div className="bg-black py-2 md:py-10 mb-20 overflow-hidden">
      <div className="relative w-full">
        <div
          className="flex gap-8 animate-marquee"
          style={{
            width: 'max-content',
            animation: 'marquee 18s linear infinite',
          }}
        >
          {images.concat(images).map((img, idx) => (
            <img key={idx} src={img} alt="" className="h-8 md:h-12" />
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  )
}

export default Companies