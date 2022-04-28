import React, { useState } from 'react'
import Link from 'next/link'

function Search() {

  const [pickup, setPickup] = useState("")
  const [dropoff, setDropoff] = useState("")

  return (
    <div className='wrapper bg-gray-200 h-screen'>
      {/* Button container */}
      <Link passHref href={'/'}>
        <div className='button-container bg-white px-4 cursor-pointer'>
          <img className='h-12' src="https://img.icons8.com/ios-filled/50/000000/left.png" alt="" />
        </div>
      </Link>
      {/* Input Container */}
      <div className="input-container bg-white flex items-center px-4 mb-2">
        <div className="fromToIcons w-10 flex flex-col mr-2 items-center">
          <img className='h-2.5' src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" alt="" />
          <img className='h-10' src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" alt="" />
          <img className='h-3' src="https://img.icons8.com/windows/50/000000/square-full.png" alt="" />
        </div>
        <div className="input-boxes flex flex-col flex-1">
          <input value={pickup} onChange={(e) => setPickup(e.target.value)} type="text" placeholder='Enter pickup location' className='h-10 bg-gray-200 my-2 rounded-sm p-2 outline-none border-none' />
          <input value={dropoff} onChange={(e) => setDropoff(e.target.value)} type="text" placeholder='Where to?' className='h-10 bg-gray-200 my-2 rounded-sm p-2 outline-none border-none' />
        </div>
        <img src="https://img.icons8.com/ios/50/000000/plus-math.png" className='w-10 h-10 bg-gray-200 rounded-full ml-3 ' alt="" />
      </div>

      {/* Saved location */}
      <div className="saved-places flex items-center bg-white px-4 py-2">
        <img className='bg-gray-400 w-10 h-10 p-2 rounded-full mr-2' src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" alt="" />
        Saved Places
      </div>

      {/* Confirm location */}
      <Link passHref href={{
        pathname: "/confirm",
        query: {
          pickup: pickup,
          dropoff: dropoff
        }
      }}>
        <div className="confirm-location cursor-pointer">
          <div className='px-4 py-3 mx-4 mt-2 text-center bg-black text-white text-2xl'>Confirm Locations</div>
        </div>
      </Link>
    </div>
  )
}

export default Search