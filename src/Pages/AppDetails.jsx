import React from "react";
import { useParams } from "react-router";

import useAppData from "../Hooks/useAppData";
const AppDetails = () => {
  const { id } = useParams();
  const { appData, loading } = useAppData();
  const app = appData.find(app => String(app.id) === id);
  if (loading) return <div className="text-center py-10">Loading...</div>;
  
  const handeleInstall = () => {
    const existingApp = JSON.parse(localStorage.getItem('installedApp'))
    let updatedApps = [];
    if (existingApp) {
      const existApp = existingApp.some(a => a.id === app.id)
      if (existApp)return alert('App is already installed')
      updatedApps = [... existingApp,app]
    } else {
      updatedApps.push(app)
    }
     localStorage.setItem('installedApp', JSON.stringify(updatedApps));
  };


  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* App Image */}
        <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center">
          <span className="text-gray-400"><img src={app?.image} alt="" /></span>
        </div>

        {/* App Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {app?.title}
          </h1>

          <p className="text-gray-500 mt-1">
            Developed by
            <span className="text-indigo-600 font-medium">
              {app?.companyName}
            </span>
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-6">
            <Stat label="Downloads" value={app?.downloads} />
            <Stat label="Avg Rating" value={app?.ratingAvg} />
            <Stat label="Reviews" value={app?.reviews} />
          </div>

          {/* Install Button */}
          <button onClick={handeleInstall} className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold">
            Install Now ({app?.size}MB)
          </button>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Ratings</h3>

        <div className="space-y-3">
          <RatingRow label="5 star" width="90%" />
          <RatingRow label="4 star" width="65%" />
          <RatingRow label="3 star" width="30%" />
          <RatingRow label="2 star" width="18%" />
          <RatingRow label="1 star" width="10%" />
        </div>
      </div>

      {/* Description */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-3">Description</h3>

        <p className="text-gray-600 leading-relaxed">
         {app?.description}
        </p>

        
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const RatingRow = ({ label, width }) => (
  <div className="flex items-center gap-4">
    <span className="w-14 text-sm text-gray-600">{label}</span>

    <div className="flex-1 bg-gray-200 rounded h-3">
      <div
        className="bg-orange-500 h-3 rounded"
        style={{ width }}
      ></div>
    </div>
  </div>
);

export default AppDetails;
