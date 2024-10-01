import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import DashSidebar from '../components/DashSidebar.jsx'
import DashProfile from '../components/DashProfile.jsx'
import DashPosts from '../components/DashPosts.jsx';

export default function DashBoard() {
  const location=useLocation();
  
  const [tab,setTab]=useState('');
  useEffect(()=>{
    const urlParmas=new URLSearchParams(location.search);
    
    const tabFromUrl=urlParmas.get('tab');
    if(tabFromUrl){
      setTab(tabFromUrl);
    }
    
  },[location.search])
  return (
    <div className='min-h-screen flex flex-col sm:flex-row'>
      <div className='md:w-56'>
        <DashSidebar/>
      </div>
      {tab==='profile' && <DashProfile/>}
      {tab=='posts' && <DashPosts/>}
    </div>
  )
}
