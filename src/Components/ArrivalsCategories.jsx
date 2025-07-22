import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "T-shirts",
    img: "https://images.unsplash.com/photo-1520923179278-ee25e25e09e4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shorts",
    img: "https://images.unsplash.com/photo-1741943716275-2eaf11f4e918?q=80&w=3169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Shirts",
    img: "https://images.unsplash.com/photo-1744208525808-66c60e0ea68c?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Hoodie",
    img: "https://images.unsplash.com/photo-1630269470848-337134b23b06?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jeans",
    img: "https://images.unsplash.com/photo-1714729382668-7bc3bb261662?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "New In",
    img: "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ArrivalsCategories = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto px-2 my-5 bg-white dark:bg-black">
        <div className="tt text-center my-10 lg:my-20 text-4xl lg:text-6xl dark:text-white">
          Categories
        </div>
        <div className="grid grid-cols-6 gap-2 md:gap-3 lg:gap-4">
          {categories.map((cat, i) => (
            <div
              className="h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] col-span-2 lg:col-span-1 relative group overflow-hidden cursor-pointer"
              key={i}
              onClick={() => navigate('/shop', { state: { category: cat.name } })}
            >
              <img
                className="h-full w-full object-cover transition-transform duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110"
                src={cat.img}
                alt={cat.name}
              />
              <span
                className="absolute bottom-2 right-2 text-white text-xl font-bold tracking-widest"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  letterSpacing: "0.2em",
                  background: "rgba(0,0,0,0.4)",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 0.25rem",
                }}
              >
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArrivalsCategories;