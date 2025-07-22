import React, { useEffect, useState } from 'react';
import Vector from "../assets/imgs/Vector.png"
import VectorOne from "../assets/imgs/Vector1.png"
import { NavLink } from 'react-router-dom';

const AnimatedNumber = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const duration = 2000; // animation duration in ms

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target); // ensure final value
      }
    };

    window.requestAnimationFrame(step);
  }, [target]);

  return <p className='text-xl md:text-5xl font-bold'>{count.toLocaleString()}+</p>;
};

const Hero = () => {
  return (
      <>
          <div className='hero'>
              <div className="grid grid-cols-12">
                      <div className="col-span-12 md:col-span-6 ml-6 md:ml-12 lg:ml-20">
                      <h1 className='font-black text-3xl md:text-6xl mt-12 md:mt-24 w-[50%] md:w-[80%]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                  <p className='font-light my-5'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                      <NavLink to="/shop"><button className='bg-black text-white py-3 w-48 md:w-72 rounded-full'>Shop Now</button></NavLink>

                      <div className='flex my-10 gap-8'>
                          <div className=''>
                              <AnimatedNumber target={200} />
                              <p className='text-gray-500'>International Brands</p>
                          </div>
                           <div className=''>
                              <AnimatedNumber target={2000} />
                              <p className='text-gray-500'>High-Quality Products</p>
                          </div>
                           <div className=''>
                              <AnimatedNumber target={30000} />
                              <p className='text-gray-500'>Happy Customers</p>
                          </div>
                          
                      </div>
                      </div>
                  <div className="col-span-12 md:col-span-6 relative">
                      <img className='absolute top-16 right-14' src={VectorOne} alt="" />
                      <img className='absolute top-72 left-10' src={Vector} alt="" />
                      </div>
              </div>
      </div>
      </>
  )
}

export default Hero

