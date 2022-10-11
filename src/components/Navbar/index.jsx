import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[70%] mx-auto p-4 flex justify-between items-center'>
        <span className='text-2xl font-bold text-white heading'>Contact Book</span>
        <button className='bg-white text-[#0052CC] p-4 rounded-full font-bold hover:bg-blue-400 hover:delay-150 transition-opacity hover:text-white'>Create Contact</button>
    </nav>
  )
}

export default Navbar