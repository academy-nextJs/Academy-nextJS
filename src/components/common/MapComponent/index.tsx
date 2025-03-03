"use client";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
const MapUpdater = ({ position }:{position: {lat:number, lng:number}|undefined}) => {
    const map = useMap();
  
    useEffect(() => {
      map.setView(position, 13); // تنظیم مرکز نقشه روی موقعیت جدید
    }, [position, map]);
  
    return null;
  };
  
const MapComponent = ({data}:{data: {lat:number, lng:number}|undefined}) => {
  const position = data ? [data?.lat, data?.lng] : [35.70063132922572, 51.33783013953433] ;

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>این موقعیت ملک مورد نظر است.</Popup>
      </Marker>
      <MapUpdater position={position} />
    </MapContainer>
  );
};

export default MapComponent;
