import React from 'react'
import HomeHero from '../components/HomeHero'
import WatchCollection from '../components/WatchCollection'
import SelectedProduct from '../components/SelectedProduct'
import Carousel from '../components/Carousel'
import Ratings from '../components/Ratings'
import Subscription from '../components/Subscription'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <WatchCollection />
      <SelectedProduct />
      <Carousel />
      <Ratings />
      <Subscription />

    </div>
  )
}

export default Home