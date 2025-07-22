import React from 'react'
import { NavLink } from 'react-router-dom'

const TopBar = () => {
  return (
      <>
          <p className='text-center py-2 bg-black text-white font-light text-xs'>Sign up and get 20% off to your first order. <NavLink to="/login"><span className='underline'>Sign Up Now</span></NavLink></p>
      </>
  )
}

export default TopBar