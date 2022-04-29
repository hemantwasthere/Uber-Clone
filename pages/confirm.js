import React, { useEffect, useState } from 'react'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector';
import Link from 'next/link'

function Confirm() {

    const router = useRouter();
    const { pickup, dropoff } = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0])

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiaGVtYW50LTAwMDAiLCJhIjoiY2wyaGswdTVuMGR0ZDNpbnp2a2FkbGk3NSJ9.RPOv8hSECbudaB16oiXvxA",
                limit: 1
            }))
            .then(res => res.json())
            .then(data => {
                setPickupCoordinates(data.features[0].center)
            })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiaGVtYW50LTAwMDAiLCJhIjoiY2wyaGswdTVuMGR0ZDNpbnp2a2FkbGk3NSJ9.RPOv8hSECbudaB16oiXvxA",
                limit: 1
            }))
            .then(res => res.json())
            .then(data => {
                setDropoffCoordinates(data.features[0].center)
            })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])


    return (
        <div className='flex h-screen flex-col'>
            <Link passHref href={'/search'}>
                <div className="back-button-container rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer">
                    <img className='' src="https://img.icons8.com/ios-filled/50/000000/left.png" alt="" />
                </div>
            </Link>
            <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />

            <div className="ride-container flex flex-1 flex-col h-1/2">
                {/* Ride Selector */}
                <RideSelector pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />

                {/* Confirm Button */}
                <div className="confirm-butoon-container border-t-2">
                    <div className="confirm-button bg-black text-white m-4 py-4 text-center text-xl cursor-pointer">
                        Confirm UberX
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Confirm