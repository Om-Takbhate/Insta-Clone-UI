import React from 'react'

const Navlinks = () => {
    return (
        <div className='w-[100vw]   bg-white sm:w-18 flex flex-row sm:flex-col '>
            <div className=' w-[100vw] bg-white sm:w-18 md:w-12 md:w-30 ml-3 flex flex-row sm:flex-col justify-between bg-red-400'>
                {/* Home */}
                <div className='flex   gap-4 hover:bg-gray-100 px-2 py-3 cursor-pointer rounded-lg mt-3'>
                    <div className='md:mr-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6">
                            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                        </svg>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-black font-bold'>Home</p>
                    </div>
                </div>
                {/* Search */}
                <div className='flex gap-4 hover:bg-gray-100 px-2 py-3 cursor-pointer rounded-lg mt-3'>
                    <div className='md:mr-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-6">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-black '>Search</p>
                    </div>
                </div>
                {/* Explore */}
                <div className='hidden sm:flex gap-4 hover:bg-gray-100 px-2 py-3 cursor-pointer rounded-lg mt-3'>
                    <div className='md:mr-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                        </svg>

                    </div>
                    <div className='hidden md:block'>
                        <p className='text-black'>Explore</p>
                    </div>
                </div>
                {/* Reels */}
                <div className='flex gap-4 hover:bg-gray-100 px-2 py-3 cursor-pointer rounded-lg mt-3'>
                    <div className='md:mr-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>

                    </div>
                    <div className='hidden md:block'>
                        <p className='text-black'>Reels</p>
                    </div>
                </div>
                {/* Message */}
                <div className='hidden sm:flex gap-4 hover:bg-gray-100 px-2 py-3 cursor-pointer rounded-lg mt-3'>
                    <div className='md:mr-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                        </svg>

                    </div>
                    <div className='hidden md:block'>
                        <p className='text-black'>Messages</p>
                    </div>
                </div>
                {/* Notifications */}
                <div className='hidden sm:flex gap-4 hover:bg-gray-100 px-2 py-3 cursor-pointer rounded-lg mt-3'>
                    <div className='md:mr-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                    </div>
                    <div className='hidden md:block'>
                        <p className='text-black'>Notifications</p>
                    </div>
                </div>
                {/* Create */}
                <div className='flex gap-4 hover:bg-gray-100 px-2 py-3 cursor-pointer rounded-lg mt-3'>
                    <div className='md:mr-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-black'>Create</p>
                    </div>
                </div>
                {/* User */}
                <div className='hidden sm:flex gap-4 hover:bg-gray-100 px-2 py-3 cursor-pointer rounded-lg mt-3'>
                    <div className='md:mr-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-black'>Profile</p>
                    </div>
                </div>
                <div className='flex gap-4 hover:bg-gray-100 px-2 py-3  cursor-pointer rounded-lg mt-3 '>
                    <div className='md:mr-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div className='hidden md:block'>
                        <p className='text-black'>More</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navlinks