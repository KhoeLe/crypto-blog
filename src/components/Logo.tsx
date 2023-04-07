import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link  to={"/"}
        className='absolute top-[1.5rem] left-[1.5rem] no-underline text-lg text-cyan flex items-center py-2 px-2'
    >
        <img className='w-20  sm:w-40 rounded-lg border-collapse object-cover' src="https://cdn.coingape.com/wp-content/uploads/2022/05/27135316/Terra-LUNA.webp"  alt="logo-terra" />
        <span className='text-base'>Crypto Currency</span>
    </Link>
  )
}

export default Logo
