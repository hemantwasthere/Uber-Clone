import React, { useEffect, useState } from 'react'
import { carList } from '../data/carList'

function RideSelector({ pickupCoordinates, dropoffCoordinates }) {
    const [rideDuration, setRideDuration] = useState()

    // get ride duration from MAPBOX API
    // 1. Pickup Coordinates
    // 1. Dropoff Coordinates
    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving${pickupCoordinates[0]}, ${pickupCoordinates[1]};${dropoffCoordinates[0]}, ${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiaGVtYW50LTAwMDAiLCJhIjoiY2wyaGswdTVuMGR0ZDNpbnp2a2FkbGk3NSJ9.RPOv8hSECbudaB16oiXvxA`)
        .then(res => res.json())
        .then(data => {
            setRideDuration(data.routes[0].duration/100)
        })
    }, [pickupCoordinates, dropoffCoordinates])


    return (
        <div className='rideWrapper flex flex-col flex-1 overflow-y-scroll overflow-hidden'>
            <div className='title text-gray-500 text-center text-xs py-2 border-b'>Choose a ride, or swipe up for more</div>
            <div className='car-list overflow-y-scroll'>
                {/* {carList.map((car, index) => {
                    <div key={index} className="car flex p-4 items-center">
                        <img src={car.imgUrl} alt="" className="car-image h-14 mr-4" />
                        <div className="car-details flex-1">
                            <div className="service font-medium">{car.service}</div>
                            <div className="time text-xs text-blue-500">5 min away</div>
                        </div>
                        <div className="car-price text-sm font-medium">{'$'+ (rideDuration * car.multiplier).toFixed(2)}</div>
                    </div>
                })} */}
                <div className="car flex p-4 items-center">
                    <img src='https://i.ibb.co/cyvcpfF/uberx.png' alt="" className="car-image h-14 mr-4" />
                    <div className="car-details flex-1">
                        <div className="service font-medium">UberX</div>
                        <div className="time text-xs text-blue-500">5 min away</div>
                    </div>
                    <div className="car-price text-sm font-medium">{'$'+ (rideDuration * 1).toFixed(2)}</div>
                </div>

                <div className="car flex p-4 items-center">
                    <img src='https://i.ibb.co/YDYMKny/uberxl.png' alt="" className="car-image h-14 mr-4" />
                    <div className="car-details flex-1">
                        <div className="service font-medium">UberXL</div>
                        <div className="time text-xs text-blue-500">5 min away</div>
                    </div>
                    <div className="car-price text-sm font-medium">{'$'+ (rideDuration * 1.5).toFixed(2)}</div>
                </div>

                <div className="car flex p-4 items-center">
                    <img src='https://i.ibb.co/Xx4G91m/uberblack.png' alt="" className="car-image h-14 mr-4" />
                    <div className="car-details flex-1">
                        <div className="service font-medium">Black</div>
                        <div className="time text-xs text-blue-500">5 min away</div>
                    </div>
                    <div className="car-price text-sm font-medium">{'$'+ (rideDuration * 2).toFixed(2)}</div>
                </div>

                <div className="car flex p-4 items-center">
                    <img src='https://i.ibb.co/cyvcpfF/uberx.png' alt="" className="car-image h-14 mr-4" />
                    <div className="car-details flex-1">
                        <div className="service font-medium">Black</div>
                        <div className="time text-xs text-blue-500">Comfort</div>
                    </div>
                    <div className="car-price text-sm font-medium">{'$'+ (rideDuration * 1.2).toFixed(2)}</div>
                </div>

                <div className="car flex p-4 items-center">
                    <img src='https://i.ibb.co/1nStPWT/uberblacksuv.png' alt="" className="car-image h-14 mr-4" />
                    <div className="car-details flex-1">
                        <div className="service font-medium">Black SUV</div>
                        <div className="time text-xs text-blue-500">Comfort</div>
                    </div>
                    <div className="car-price text-sm font-medium">{'$'+ (rideDuration * 2.8).toFixed(2)}</div>
                </div>
            </div>
        </div>
    )
}

export default RideSelector