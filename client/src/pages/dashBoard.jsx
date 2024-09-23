import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar.jsx'
import DashProfile from '../components/DashProfile.jsx'

export default function DashBoard() {
  const location=useLocation();
  console.log("location :" ,location.search);
  const [tab,setTab]=useState('');
  useEffect(()=>{
    const urlParmas=new URLSearchParams(location.search);
    console.log("urlparams",urlParmas);
    const tabFromUrl=urlParmas.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
    console.log(tabFromUrl);
  },[location.search])
  return (
    <div className='min-h-screen flex flex-col sm:flex-row'>
      <div className='md:w-56'>
        <DashSidebar/>
      </div>
      {tab==='profile' && <DashProfile/>}
    </div>
  )
}
