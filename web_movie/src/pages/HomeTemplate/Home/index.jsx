import React from 'react'
import BannerAuto from './BannerAuto'
import ListMovie from "../ListMovie"
const Home = () => {
  return (
    <div className='mt-20'>
      <BannerAuto></BannerAuto>
      <ListMovie></ListMovie>
    </div>
  )
}

export default Home