import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full md:w-[70%] mx-auto p-4 flex justify-between items-center'>
        <span className='text-lg md:text-2xl font-bold text-white heading'>Contact Book</span>
        <span className='text-md md:text-xl font-bold text-white'>MVP Version</span>
    </nav>
  )
}

export default Navbar