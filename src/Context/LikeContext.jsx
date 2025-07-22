import React, { createContext, useContext, useState } from "react";

const LikeContext = createContext();

export const useLike = () => useContext(LikeContext);

export const LikeProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (item) => {
    setLikedItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <LikeContext.Provider value={{ likedItems, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};