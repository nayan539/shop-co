import React from "react";
import BannerImg from "../assets/imgs/banner/bannerone.jpg";
import BannerImgTwo from "../assets/imgs/banner/bannertwo.jpg";
import TopSelling from "../Components/TopSelling";

const Sale = () => {
  return (
    <>
      {/* <img className="img-fluid w-full" src={BannerImg} alt="banner-img" /> */}
      <div className="w-full bg-red-50">
        <img className="img-fluid w-full h-full" src={BannerImg} alt="" />
      </div>
      <TopSelling/>

      <div className="w-full bg-red-50">
        <img className="img-fluid w-full h-full" src={BannerImgTwo} alt="" />
      </div>
    </>
  );
};

export default Sale;
