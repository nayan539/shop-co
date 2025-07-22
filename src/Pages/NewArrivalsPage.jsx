import React, { useState, useEffect, useRef } from "react";
import ArrivalsCategories from "../Components/ArrivalsCategories";
import RoundedCarousel from "../Components/RoundedCarousel";



const NewArrivalsPage = () => {

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="text-center container mx-auto w-7/12 ">
          <div className="border inline-block px-3 py-1 rounded-full hover:bg-black hover:text-white transition-all">
            New spring collection 2025
          </div>
          <h1 className="tt text-3xl lg:text-6xl my-4">
            Where style speaks, trends resonate,
            <br />
            fashion flourishes
          </h1>
          <p className="text-gray-500">
            Unveiling a fashion destination where trends blend seamlessly with
            your individual style aspirations. Discover today!
          </p>
          <button className="border rounded-full py-2 px-4 my-4">
            New Collections{" "}
            <span className="text-white">
              <i className="fa-solid fa-arrow-right p-1.5 rounded-full bg-black"></i>
            </span>
          </button>
        </div>

       
        <ArrivalsCategories />
        <RoundedCarousel/>
      </div>
    </>
  );
};

export default NewArrivalsPage;