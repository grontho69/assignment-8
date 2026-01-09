import React, { useEffect, useState } from 'react'
import MyContainer from '../Components/MyContainer';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);

  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem('installedApp'));
    if (storedApps) 
      setInstalledApps(storedApps);
    
  }, []);

  const sortedApps = () => {
    if (sortOrder === 'downloads') {
      return [...installedApps].sort((a, b) => a.downloads - b.downloads);
    }
    if (sortOrder === 'rating') {
      return [...installedApps].sort((a, b) => a.ratingAvg - b.ratingAvg);
    }
    if (sortOrder === 'size') {
      return [...installedApps].sort((a, b) => a.size - b.size);
    }
    return [...installedApps];
  };

  



  const handelRemove = (id) => {
    const existingApp = JSON.parse(localStorage.getItem('installedApp'))
    let updatedApps = existingApp.filter(a => a.id !==id)
    
setInstalledApps(prev => prev.filter(a=>a.id !==id) )


     localStorage.setItem('installedApp', JSON.stringify(updatedApps));
}



  return (
    <div>
     
      <MyContainer>
          <div className='flex justify-between mt-2 mb-8 p-5 items-center'>
      <h1 className='text-sm font-bold text-center my-10'>({installedApps.length}) Apps Found</h1>
     
        <label className='form-control max-w-sm'>
          <select className='select select-bordered'
            value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="none">Sort by</option>
        <option value="downloads">Downloads</option>
        <option value="rating">Rating</option>
        <option value="size">Size</option>
      </select>
</label>

      </div>
   <div className="w-full space-y-4">
  {sortedApps().map(app => (
    <div
      key={app.id}
      className="w-full bg-base-100 rounded-xl shadow-md p-4 flex items-center justify-between"
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        <img
          src={app.image}
          alt={app.title}
          className="w-12 h-12 rounded-lg"
        />

        <div>
          <h3 className="font-semibold">{app.title}</h3>
          <div className="flex gap-4 text-sm opacity-70">
            <MdOutlineFileDownload /><span>  {app.downloads}</span>
            <FaStar /><span>  {app.ratingAvg}</span>
            <span>{app.size}MB</span>
          </div>
        </div>
      </div>

      {/* Right button */}
      <button onClick={() => handelRemove(app.id)} className="btn btn-outline btn-sm bg-green-400 text-white">
        Uninstall
      </button>
    </div>
  ))}
</div>
</MyContainer>

    </div>
  )
}

export default Installation
