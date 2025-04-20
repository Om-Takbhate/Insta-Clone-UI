import React, {useState} from 'react'

const SinglePost = () => {

  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className='w-[98%]  sm:w-[70%]  mx-auto sm:ml-12 my-5 p-2'>
      <div >
        <div className='flex items-center justify-start  gap-0'>
          <div className='w-11'>
            <img className='w-8 h-8 rounded-[50%] object-cover object-center' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbTezYange_PJP3KLcuf3kr6q_5uQtRt-IgMo9p8pvmC1gWMGF9-YcaAEGk4m7l95hzZkHfCcJQ5hMQrBU43CHg" alt="" />
          </div>
          <div className=''>
            <p className='text-lg text-black font-sans font-semibold'>Virat Kohli</p>
            <p className='text-xs text-gray-600 '>Batsman</p>
          </div>
        </div>
        <div className='p-2 mt-2'>
          <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, esse!</p>
        </div>
        <div className='w-full h-98'>
          <img src="https://assets.gqindia.com/photos/6798ad44ddc711fc6f4403b3/master/w_1600%2Cc_limit/Virat-Kohli.jpg" className='object-contain object-center w-full h-full rounded-2xl' alt="" />
        </div>
        <div className='w-full flex mt-4 ml-2 gap-4 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill={`${isLiked ? 'red' : 'none'}`} viewBox="0 0 24 24" strokeWidth={`${isLiked ? 0 : 1.4}`} width="24" stroke="black" className="size-8 hover:fill-red-600 hover:stroke-0 cursor-pointer " onClick={() => setIsLiked(true)} >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>

          <svg aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="black" strokeLinejoin="round" strokeWidth="2"></path></svg>
          <svg aria-label="Share" className="x1lliihq x1n2onr6 xyb1xck" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><line fill="black" stroke="black" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="black" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
        </div>
      </div>
    </div>
  )
}

export default SinglePost