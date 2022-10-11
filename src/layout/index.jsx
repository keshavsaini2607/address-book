import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({children}) => {
  return (
    <div className='h-screen'>
        <div className="h-[45%] bg-[#0052CC] w-full relative">
            <Navbar />
            <div>{children}</div>
        </div>
    </div>
  )
}

export default Layout