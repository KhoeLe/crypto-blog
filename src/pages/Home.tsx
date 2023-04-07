import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Crypto from './Crypto'


function Home() {
  return (
    <div className='flex w-ful h-full flex-col first-letter:content-center items-center relative text-white font-nunito' >
        {/* Home */}

      <div className='w-screen h-screen bg-gray-300 fixed -z-10'>
        <Logo />
      </div>
      <Navigation />


      {/* React router dom outlet: */}
      < Outlet />
    </div>
  )
}

export default Home
