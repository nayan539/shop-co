import React, { useState, useRef, useEffect } from 'react'
import Product from './Product'

const TopSelling = () => {
  const [showAll, setShowAll] = useState(false);
  const [maxHeight, setMaxHeight] = useState('500px');
  const gridRef = useRef(null);

  // Replace with your real products array if needed
  const products = Array.from({ length: 12 });

  useEffect(() => {
    if (showAll && gridRef.current) {
      setTimeout(() => {
        setMaxHeight(`${gridRef.current.scrollHeight}px`);
      }, 50); // Slightly increased delay for smoother animation
    } else {
      setMaxHeight('500px');
    }
  }, [showAll, products.length]);

  return (
    <>
      <div className='container mx-auto px-5'>
        <h1 className='text-center tt text-7xl my-10'>Top Selling</h1>
        <div
          ref={gridRef}
          style={{
            maxHeight,
            opacity: showAll ? 1 : 0.95,
            transition: 'max-height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.5s',
            overflow: 'hidden',
          }}
        >
          <div className="grid grid-cols-12 gap-4">
            {(showAll ? products : products.slice(0, 4)).map((_, idx) => (
              <div key={idx} className="col-span-6 md:col-span-4 lg:col-span-3">
                <Product />
              </div>
            ))}
          </div>
        </div>
        <div className='text-center my-10'>
          {!showAll && (
            <button
              className='px-24 py-3 rounded-full border-2 border-gray-200 hover:bg-gray-100'
              onClick={() => setShowAll(true)}
            >
              View All
            </button>
          )}
        </div>
        <hr className='my-20'/>
      </div>
    </>
  )
}

export default TopSelling