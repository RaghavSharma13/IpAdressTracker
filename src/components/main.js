import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import {Icon} from 'leaflet';
import "./styles/main.css";

const Main = ({lat=51.505,lon=-0.09}) => {
    const ChangeView=({coords})=>{
        const map=useMap();
        map.setView(coords,map.getZoom());
        return null;
    }

    const marker=new Icon({
      iconUrl:'/icon-location.svg',
      iconSize:[48,58]
    })

  return (
    <div className="Main">
      <MapContainer center={[lat, lon]} zoom={10} zoomControl={false} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]} icon={marker}>
        </Marker>
        <ChangeView coords={[lat,lon]}/>
      </MapContainer>
    </div>
  );
};

export default Main;
