import React from 'react'
import Navlinks from './Navlinks'
import Logo from './Logo'

const Sidebar = () => {
    return (
        <div className='w-[40%]  z-30 fixed bg-white sm:flex -bottom-5 sm:bottom-0 sm:relative  md:w-150  flex flex-col h-20 sm:h-[100%] border-r-1 border-gray-300'>
            <div className='hidden sm:block mt-10 h-[5%]'>
                <Logo />
            </div>
            <div className='w-[100%] h-20 sm:h-[100%]'>
                <Navlinks />
            </div>
        </div>
    )
}

export default Sidebar