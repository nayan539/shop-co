import React from 'react'

const NewsLater = () => {
  return (
      <>
          <div className="container mx-auto my-5">
               <div className="flex flex-col md:flex-row bg-black py-6 px-8 lg:px-16 justify-around items-center rounded-3xl gap-3">
              <div>
                  <h1 className='text-white tt text-4xl md:text-5xl lg:text-6xl'>STAY UPTO DATE ABOUT</h1>
                  <h1 className='text-white tt text-4xl md:text-5xl lg:text-6xl'>OUR LATEST OFFERS</h1>
              </div>
              <div>
                  <input className='rounded-full py-3 w-94 ps-6 w-full inline-block' type="text" placeholder='Enter Your email address' />
                  <button className='rounded-full bg-white w-full py-3 mt-4 hover:bg-[#F0F0F0]'>Subscriber to Newsletter</button>
              </div>
      </div>
         </div>
      </>
  )
}

export default NewsLater 