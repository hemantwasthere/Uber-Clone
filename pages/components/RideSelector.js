import React from 'react'
import { carList } from '../data/carList'

function RideSelector() {
    return (
        <div className='rideWrapper flex flex-col flex-1 overflow-y-scroll overflow-hidden'>
            <div className='title text-gray-500 text-center text-xs py-2 border-b'>Choose a ride, or swipe up for more</div>
            <div className='car-list overflow-y-scroll'>
                {carList.map((car, index) => {
                    <div key={index} className="car flex p-4 items-center">
                        <img src={car.imgUrl} alt="" className="car-image h-14 mr-4" />
                        <div className="car-details flex-1">
                            <div className="service font-medium">{car.service}</div>
                            <div className="time text-xs text-blue-500">5 min away</div>
                        </div>
                        <div className="car-price text-sm font-medium">$20.32</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default RideSelector