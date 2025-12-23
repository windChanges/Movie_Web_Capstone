import React from 'react'
import Navbar from "./_components/Navbar"
import Footer from './_components/Footer'
import { Outlet } from 'react-router-dom'
const HomeTemplate = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default HomeTemplate