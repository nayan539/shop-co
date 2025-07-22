import React from 'react'
import Hero from '../Components/Hero'
import Companies from '../Components/Companies'
import NewArrivals from '../Components/NewArrivals'
import TopSelling from '../Components/TopSelling'
import Categories from '../Components/Categories'
import Reviews from '../Components/Reviews'
import NewsLater from '../Components/NewsLater'
import ArrivalsCategories from '../Components/ArrivalsCategories'
import RoundedCarousel from '../Components/RoundedCarousel'


const HomePage = () => {
  return (
    <>
      <div className='dark:bg-black'>
      <Hero />
        <Companies />
        <ArrivalsCategories/>
        <NewArrivals />
      <TopSelling />
        <RoundedCarousel/>
      {/* <Categories /> */}
      <Reviews />
      <NewsLater />
        </div>
      </>
  )
}

export default HomePage