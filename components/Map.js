import React, { useEffect } from 'react'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiaGVtYW50LTAwMDAiLCJhIjoiY2wyaGswdTVuMGR0ZDNpbnp2a2FkbGk3NSJ9.RPOv8hSECbudaB16oiXvxA';

export default function Map({ pickupCoordinates, dropoffCoordinates }) {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3
    });
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }
    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }
    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([
        pickupCoordinates,
        dropoffCoordinates
      ],{
        padding: 50
      })
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
  }
  return (
    <div className='flex-1 h-1/2' id="map"></div>
  )
}

