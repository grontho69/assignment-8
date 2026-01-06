import React from 'react'
import { Link, useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';
import heroImg from "../assets/hero.png"
  


const Home = () => {
  const appData = useLoaderData();
  console.log(appData)
  return (
    <div>
 {/*hero section*/}

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="flex flex-col items-center gap-6">

      <h1 className="text-5xl font-bold">We Build <br /> <span className='  bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>

      <p className="py-6 text-gray-400 max-w-xl">
       At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <button className="btn ">Google Play</button>
        <button className="btn ">App Store</button>
      </div>

      {/* Image */}
      <img
              src={heroImg }
        className=""
        
      />
    </div>
  </div>
      </div>
      <div className="stats bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] text-white ">
  <div className="stat">
    
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
  
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>



      {/*ternding apps secction*/}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-16 mb-16 gap-8 mx-4'>
        <h1 className='col-span-full text-center text-4xl font-extrabold'>Trending Apps</h1>
        <p className='col-span-full text-center  text-lg'>Explore All Trending Apps on the Market developed by us</p>
        {appData.map(item => (
          <AppCard item={item} key={item.id} />
        ))}
     </div>
    </div>
  )
}

export default Home
