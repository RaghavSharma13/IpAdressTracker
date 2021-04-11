import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './components/header';
import InfoCard from './components/InfoCard';
import Main from './components/main';

function App() {
  const [ipInfo,setIpInfo]=useState({});
  const key=process.env.REACT_APP_API_KEY;
  const getData=async(ipAddress="")=>{
    try{
      const result=await (await fetch(`https://geo.ipify.org/api/v1?apiKey=${key}&ipAddress=${ipAddress}`)).json();
      setIpInfo({
        ip:result.ip,
        location:result.location.city+', '+result.location.region+' '+result.location.postalCode,
        timezone:'UTC '+result.location.timezone,
        isp:result.isp,
        lat:result.location.lat,
        lng:result.location.lng
      })
    }
    catch{
      setIpInfo({
        error:'An Error Occurred'
      })
    }
  }
  //eslint-disable-next-line
  useEffect(()=>getData(),[]);
  return (
    <div className="App">
      <Header getIpInfo={getData}/>
      <InfoCard ipInfo={ipInfo}/>
      <Main lat={ipInfo.lat} lon={ipInfo.lng} />
    </div>
  );
}

export default App;
