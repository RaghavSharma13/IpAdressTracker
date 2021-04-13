import React, { useState } from "react";
import "./styles/InfoCard.css";
import { ReactComponent as IconArrow } from "../images/icon-arrow.svg";
const InfoCard = ({ ipInfo }) => {
    const [drop,setDrop]=useState(true);
    window.addEventListener('resize',()=>{
        if(window.innerWidth>=870) return setDrop(true);
    })
  return (
    <div className="infoCard">
      <div className="infoCard--dropdown">
        <h3>Details</h3>
        <IconArrow className={`dropdown--arrow ${drop? "down":""}`} alt="See Details" onClick={()=>setDrop(!drop)} />
      </div>
      <div className={`infoCard--info ${drop? "show-Details":""}`}>
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
        <div className="tile">
          <h6>ISP</h6>
          <h3>{ipInfo.isp}</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
