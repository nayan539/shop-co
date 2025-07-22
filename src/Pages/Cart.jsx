import React from 'react'
import NewsLater from '../Components/NewsLater'
import CartItem from '../Components/CartItem'

const Cart = () => {
  return (
    <>
      <div>
        <div className='container mx-auto px-5 sm:px-0'>
          <p className='tt text-4xl'>YOUR CART</p>
        </div>
        <CartItem/>
        <NewsLater />
      </div>
    </>
  )
}

export default Cart