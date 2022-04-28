import React from 'react'

function RideSelector() {
  return (
    <div className='flex-1'>
        <div className='title text-gray-500 text-center text-xs py-2 border-b'>Choose a ride, or swipe up for more</div>
        <div className='car-list'>
            <div className="car">
                <img src="https://i.ibb.co/cyvcpfF/uberx.png" alt="" className="car-image" />
            </div>
        </div>
    </div>
  )
}

export default RideSelector