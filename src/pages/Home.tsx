import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

function Home() {

  return (
    <div className='flex w-ful h-full flex-col first-letter:content-center items-center relative text-white font-nunito' >
        {/* Home */}

      <a className='w-screen h-screen bg-gray-300 fixed -z-10 -mt-4'>
        <Logo />
      </a>
      <Navigation />


      {/* React router dom outlet: */}
      < Outlet />
    </div>
  )
}

export default Home
