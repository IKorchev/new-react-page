import React from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"

const MapComponent = () => {
  return (
    <MapContainer
      style={{ height: "250px", width: "300px" }}
      className='map'
      center={[51.587, -0.096]}
      zoom={9.3}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[51.587, -0.096]}></Marker>
    </MapContainer>
  )
}
export default MapComponent
