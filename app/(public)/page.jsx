import React from 'react'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import BannerCountdown from '../components/BannerCountdown '
import PopularProducts from '../components/PopularProducts'

const page = () => {
  return (
    <>
    <Hero/>
    <NewArrivals />
    <BannerCountdown/>
    <PopularProducts />
    </>
  )
}

export default page
