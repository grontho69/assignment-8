import React from "react";

const LoadingSpinner = ({ fullScreen = false }) => {
  return (
    <div
      className={`flex justify-center items-center ${
        fullScreen ? "min-h-screen" : "h-64"
      }`}
    >
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );
};

export default LoadingSpinner;

