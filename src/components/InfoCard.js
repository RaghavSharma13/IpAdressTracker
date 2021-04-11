import React from 'react'
import './styles/InfoCard.css';

const InfoCard = ({ipInfo}) => {
    return (
        <div className="infoCard">
            <div className="tile">
                <h6>IP Address</h6>
                <h3>{ipInfo.ip}</h3>
            </div>
            <div className="line"></div>
            <div className="tile">
                <h6>Location</h6>
                <h3>{ipInfo.location}</h3>
            </div>
            <div className="line"></div>
            <div className="tile">
                <h6>Timezone</h6>
                <h3>{ipInfo.timezone}</h3>
            </div>
            <div className="line"></div>
            <div className="tile last">
                <h6>ISP</h6>
                <h3>{ipInfo.isp}</h3>
            </div>
        </div>
    )
}

export default InfoCard
