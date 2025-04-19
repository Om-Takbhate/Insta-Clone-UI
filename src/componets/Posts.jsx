import React from 'react'
import SinglePost from './SinglePost'

const Posts = () => {
    return (
        <div className='sm:ml-15 w-full hide-scrollbar  overflow-x-hidden lg:w-[72%] pt-2 sm:pb-10 z-20 mt-1 ' >
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
        </div>
    )
}

export default Posts