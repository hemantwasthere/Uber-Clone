import React, { useEffect, useState } from 'react'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector';

function Confirm() {

    const router = useRouter();
    const { pickup, dropoff } = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

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
            <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />

            <div className="ride-container flex flex-1 flex-col">
                {/* Ride Selector */}
                <RideSelector/>

                {/* Confirm Button */}
                <div className="confirm-butoon-container bg-black text-white">
                    Confirm UberX
                </div>
            </div>

        </div>
    )
}

export default Confirm