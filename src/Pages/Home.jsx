import React from 'react'
import { Link } from 'react-router';
import AppCard from '../Components/AppCard';
import heroImg from "../assets/hero.png"
import { BsGooglePlay } from "react-icons/bs";
  import { FaAppStoreIos } from "react-icons/fa";
import useAppData from '../Hooks/useAppData';
import MyContainer from '../Components/MyContainer';


const Home = () => {
const { appData} =useAppData()
  const data = useAppData();
  console.log(data)
  const TrendingApps = appData.slice(0,8)

  return (
    <div>
      <MyContainer>
         {/*hero section*/}

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="flex flex-col items-center gap-6">

      <h1 className="text-5xl font-bold">We Build <br /> <span className='  bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>

      <p className="py-6 text-gray-400 max-w-xl">
       At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

    
 
<div className="flex gap-6">
  <a
    href="https://play.google.com/store/games?device=windows"
    target="_blank"
    rel="noopener noreferrer"
    className="btn flex items-center gap-2"
  >
    <BsGooglePlay /> Google Play
  </a>

  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    className="btn flex items-center gap-2"
  >
    <FaAppStoreIos /> App Store
  </a>
</div>


     
      <img
              src={heroImg }
        className=""
        
      />
    </div>
  </div>
      </div>
      <div className=" bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))] text-white w-full p-20 ">
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12 '>Trusted by Millions, Built for You</h2>
 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    
    <div>
      <p className="text-sm opacity-80">Total Downloads</p>
      <p className="text-4xl font-bold mt-2">29.6M</p>
      <p className="text-sm opacity-80 mt-1">21% more than last month</p>
    </div>

    <div>
      <p className="text-sm opacity-80">Total Reviews</p>
      <p className="text-4xl font-bold mt-2">906K</p>
      <p className="text-sm opacity-80 mt-1">46% more than last month</p>
    </div>

    <div>
      <p className="text-sm opacity-80">Active Apps</p>
      <p className="text-4xl font-bold mt-2">132+</p>
      <p className="text-sm opacity-80 mt-1">31 more will launch</p>
    </div>

  </div>
</div>



      {/*ternding apps secction*/}
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-16 mb-16 gap-8 mx-4'>
        <h1 className='col-span-full text-center text-4xl font-extrabold'>Trending Apps</h1>
        <p className='col-span-full text-center  text-lg'>Explore All Trending Apps on the Market developed by us</p>
        {TrendingApps.map(item => (
          <AppCard item={item} key={item.id} />
        ))}
     <div className='flex col-span-full justify-center mt-2'> <Link to="/all-apps" className='btn btn-primary bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1))]  text-center flex'>Show All</Link> </div>
     </div>
</MyContainer>
    </div>
  )
}

export default Home
