import React from 'react'
import { Link } from 'react-router'
import { IoDownloadOutline } from "react-icons/io5";
import { FaStar } from 'react-icons/fa';
const AppCard = ({item}) => {
  return (
    <div>
       <Link to="/app-details" className="hover-3d my-12 mx-2 cursor-pointer gap-4">
  
  {/* content */}
  <div className="card w-96 bg-white text-black ">
    <div className="card-body p-2 ">
      <div className="flex justify-between mb-10">
        <figure className="w-60 rounded-2xl">
                   <img src={item.image} alt={item.title} />
      
  </figure>
        
            </div>
                <div className="text-lg mb-4 ">{item.title}</div>
      
      <div className="flex justify-between">
              <div className='flex gap-0.5 bg-green-100 px-1 text-green-500'>
          <div className="text-xs"><IoDownloadOutline /></div>
                <div>{item.size }</div>
        </div>
        <div className='flex gap-0.5 bg-orange-100 text-orange-500'>
          <div className="text-xs opacity-20"><FaStar /></div>
                <div>{item.ratingAvg}</div>
        </div>
      </div>
    </div>
  </div>
  
 
  <div></div>
  <div></div>
</Link>
    </div>
  )
}

export default AppCard
