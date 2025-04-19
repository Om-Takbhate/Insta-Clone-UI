import React from 'react'

const SingleStory = () => {
    return (
        <div className='flex flex-col justify-center items-center  gap-2 pt-5  '>
            <div className='w-18 h-18 border-3 border-red-400 rounded-[50%] p-1 hover:brightness-90 cursor-pointer'>
                <img className='w-full h-full object-cover object-center rounded-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbTezYange_PJP3KLcuf3kr6q_5uQtRt-IgMo9p8pvmC1gWMGF9-YcaAEGk4m7l95hzZkHfCcJQ5hMQrBU43CHg" alt="" />
            </div>
                <p className='text-black'>Virat</p>
            {/* <div className='w-18 h-18 border-3 border-red-400 rounded-[50%] p-1 hover:brightness-90 cursor-pointer'>
                <img className='w-full h-full object-cover object-center rounded-[50%]' src="https://pbs.twimg.com/profile_images/1688266765095276544/EyCtuQS2_400x400.jpg" alt="" />
            </div> */}
        </div>
    )
}

export default SingleStory