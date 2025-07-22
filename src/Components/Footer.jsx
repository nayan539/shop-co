import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F0F0F0]">
        <div className="container mx-auto p-8  md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div>
              <NavLink to="/"><h1 className="logo text-5xl">SHOP.CO</h1></NavLink>
              <p className="text-gray-600 w-64 mt-3">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex gap-3 mt-4">
                <i class="fa-brands fa-twitter border border-gray-400 rounded-full w-8 h-8 text-center flex justify-center items-center bg-white hover:bg-black hover:text-white"></i>
                <i class="fa-brands fa-facebook-f border border-gray-400 rounded-full w-8 h-8 text-center flex justify-center items-center bg-white hover:bg-black hover:text-white"></i>
                <i class="fa-brands fa-instagram border border-gray-400 rounded-full w-8 h-8 text-center flex justify-center items-center bg-white hover:bg-black hover:text-white"></i>
                <i class="fa-brands fa-github border border-gray-400 rounded-full w-8 h-8 text-center flex justify-center items-center bg-white hover:bg-black hover:text-white"></i>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-medium">COMPANY</h1>
              <ul className="text-start">
                <li className="mt-3">About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Carrer</li>
              </ul>
            </div>

            <div>
              <h1 className="text-xl font-medium">HELP</h1>
              <ul className="text-start">
                <li className="mt-3">Cuestomer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h1 className="text-xl font-medium">FAQ</h1>
              <ul className="text-start">
                <li className="mt-3">Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>

            <div>
              <h1 className="text-xl font-medium">RESOURCES</h1>
              <ul className="text-start">
                <li className="mt-3">Free E-books</li>
                <li>Development Tutorial</li>
                <li>How To - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
                  </div>
                  
                  <hr className=" border-1 border-gray-400 my-12" />
                  
                  <div className="flex justify-between items-center">
                      <div><p className="text-gray-500">Shop.co © 2000-2023, All Rights Reserved</p></div>
                      <div><img src="./public/imgs/companies.png" alt="" /></div>
                  </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
