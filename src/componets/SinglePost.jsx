import React from 'react'

const SinglePost = () => {
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
        <div className='w-full flex mt-4 ml-2 gap-4'>
          <svg aria-label="Like" className="x1lliihq x1n2onr6 xyb1xck" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
          <svg aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="black" strokeLinejoin="round" strokeWidth="2"></path></svg>
          <svg aria-label="Share" className="x1lliihq x1n2onr6 xyb1xck" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share</title><line fill="black" stroke="black" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="black" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
        </div>
      </div>
    </div>
  )
}

export default SinglePost