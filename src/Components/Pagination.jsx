import React from 'react'

const Pagination = () => {
  return (
      <>
          <div className="flex justify-between items-center my-5 mx-2">
              <div>
                  <button className='flex gap-3 items-center border border-gray-400 rounded-lg py-2 px-4 hover:bg-black hover:text-white transition'><i class="fa-solid fa-arrow-left"></i><p>Previous</p></button>
              </div>
              <div >
                  <ul className='flex gap-2 sm:gap-3'>
                      <li className='bg-gray-200 w-8 h-8 rounded-lg flex justify-center items-center'>1</li>
                      <li className='hover:bg-gray-200 w-8 h-8 rounded-lg flex justify-center items-center'>2</li>
                      <li className='block sm:hidden'>...</li>
                      <li className='hover:bg-gray-200 w-8 h-8 rounded-lg flex justify-center items-center hidden sm:block'>3</li>
                      <li className='hover:bg-gray-200 w-8 h-8 rounded-lg flex justify-center items-center hidden sm:block'>4</li>
                      <li className='hover:bg-gray-200 w-8 h-8 rounded-lg flex justify-center items-center hidden sm:block'>5</li>
                      <li className='hover:bg-gray-200 w-8 h-8 rounded-lg flex justify-center items-center'>6</li>
                  </ul>
              </div>
              <div>
                  <button className='flex gap-3 items-center border border-gray-400 rounded-lg py-2 px-4 hover:bg-black hover:text-white transition'><i class="fa-solid fa-arrow-right"></i><p>Next</p></button>
                  
              </div>
      </div>
      </>
  )
}

export default Pagination