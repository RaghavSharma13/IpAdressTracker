import React, { useState } from 'react'
import icon_arrow from '../images/icon-arrow.svg';
import './styles/header.css';

const Header = ({getIpInfo}) => {
    const [ipAddress,setIpAddress]=useState("");
    return (
        <div className="header">
            <h2>IP Address Tracker</h2>
            <div className="header--input">
                <input type="text" placeholder="Search for any IP address or domain" onChange={(e)=>setIpAddress(e.target.value)}/>
                <div className="search__button" onClick={()=>getIpInfo(ipAddress)}>
                    <img src={icon_arrow} alt="Search"/>
                </div>
            </div>
        </div>
    )
}

export default Header
