import React from 'react'
import Sidebar from './Sidebar'
import Posts from './Posts'
import Header from './Header'
import Stories from './Stories'

const Body = () => {
    return (
        <div className='w-full relative h-screen  flex flex-col sm:flex-row'>
            <Header />
            <Sidebar />
            <div className='flex flex-col overflow-y-scroll overflow-x-hidden hide-scrollbar'>
                <Stories />
                <Posts />
            </div>
        </div>
    )
}

export default Body