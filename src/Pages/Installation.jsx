import React, { useEffect, useState } from 'react'
import MyContainer from '../Components/MyContainer';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem('installedApp'));
    if (storedApps) setInstalledApps(storedApps);
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
    const existingApp = JSON.parse(localStorage.getItem('installedApp')) || [];
    const updatedApps = existingApp.filter(a => a.id !== id);

    setInstalledApps(updatedApps);
    localStorage.setItem('installedApp', JSON.stringify(updatedApps));

    toast.success('App uninstalled successfully');
  };

  return (
    <div>
      <MyContainer>

        <ToastContainer position="top-right" autoClose={2000} />

        <div className='text-center mt-10'>
          <h1 className='text-2xl font-semibold'>Your Installed Apps</h1>
          <p className='text-sm opacity-70 mt-2'>Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className='flex justify-between mt-2 mb-8 p-5 items-center'>
          <h1 className='text-sm font-bold'>
            ({installedApps.length}) Apps Found
          </h1>

          <label className='form-control max-w-sm'>
            <select
              className='select select-bordered'
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by</option>
              <option value="downloads">Downloads</option>
              <option value="rating">Rating</option>
              <option value="size">Size</option>
            </select>
          </label>
        </div>

        {/* EMPTY STATE */}
        {installedApps.length === 0 ? (
          <div className="text-center text-gray-500 py-20 text-lg font-semibold">
            No app here
          </div>
        ) : (
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
                    <div className="flex gap-4 text-sm opacity-70 items-center">
                      <MdOutlineFileDownload /> <span>{app.downloads}</span>
                      <FaStar /> <span>{app.ratingAvg}</span>
                      <span>{app.size}MB</span>
                    </div>
                  </div>
                </div>

                {/* Right button */}
                <button
                  onClick={() => handelRemove(app.id)}
                  className="btn btn-outline btn-sm bg-green-400 text-white"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        )}

      </MyContainer>
    </div>
  )
}

export default Installation;
