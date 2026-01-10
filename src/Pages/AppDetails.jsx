import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAppData from "../Hooks/useAppData";
import MyContainer from "../Components/MyContainer";
import iconD from "../assets/icon-downloads.png";
import iconRa from "../assets/icon-ratings.png";
import iconRe from "../assets/icon-review.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import LoadingSpinner from "../Components/LoadingSpinner";




const AppDetails = () => {
  const { id } = useParams();
  const { appData, loading } = useAppData();

  const app = appData.find(app => String(app.id) === id);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (!app) return;

    const existingApp =
      JSON.parse(localStorage.getItem("installedApp")) || [];
    const isInstalled = existingApp.some(a => a.id === app.id);
    setInstalled(isInstalled);
  }, [app]);

  // 🔄 PAGE LOADING SPINNER
  if (loading)
    return (
       <LoadingSpinner fullScreen />
    );

  if (!app)
    return <div className="text-center py-10">App not found</div>;

  const handeleInstall = () => {
    if (installed) return;

    const existingApp =
      JSON.parse(localStorage.getItem("installedApp")) || [];

    const updatedApps = [...existingApp, app];
    localStorage.setItem("installedApp", JSON.stringify(updatedApps));

    setInstalled(true);

    // ✅ SUCCESS TOAST
    toast.success("App installed successfully", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const RatingRow = ({ label, percentage, count }) => (
    <div className="flex items-center gap-4">
      <span className="w-14 text-sm text-gray-600">{label}</span>

      <div className="flex-1 bg-gray-200 rounded h-3 overflow-hidden">
        <div
          className="bg-orange-500 h-3 rounded transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <span className="w-20 text-xs text-gray-500 text-right">
        {count.toLocaleString()}
      </span>
    </div>
  );

  return (
    <div>
      <MyContainer>

        {/* TOAST CONTAINER */}
        <ToastContainer />

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center">
            <img src={app.image} alt={app.title} className="w-28 h-28" />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold">{app.title}</h1>

            <p className="text-gray-500 mt-1">
              Developed by{" "}
              <span className="text-indigo-600 font-medium">
                {app.companyName}
              </span>
            </p>

            <div className="flex gap-10 mt-6">
              <div>
                <img src={iconD} alt="" />
                <Stat label="Downloads" value={app.downloads} />
              </div>
              <div>
                <img src={iconRa} alt="" />
                <Stat label="Avg Rating" value={app.ratingAvg} />
              </div>
              <div>
                <img src={iconRe} alt="" />
                <Stat label="Reviews" value={app.reviews} />
              </div>
            </div>

            <button
              onClick={handeleInstall}
              disabled={installed}
              className={`mt-6 px-6 py-3 rounded-lg font-semibold transition
                ${
                  installed
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
            >
              {installed ? "Installed" : `Install Now (${app.size}MB)`}
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Ratings</h3>

          <div className="space-y-3">
            {app.ratings.map((rating) => {
              const maxRating = Math.max(
                ...app.ratings.map(r => r.count)
              );
              const percentage = (rating.count / maxRating) * 100;

              return (
                <RatingRow
                  key={rating.name}
                  label={rating.name}
                  percentage={percentage}
                  count={rating.count}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed">
            {app.description}
          </p>
        </div>

      </MyContainer>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default AppDetails;
