import React from 'react'
import NaI from "../assets/App-Error.png"
import MyContainer from './MyContainer'

const NoAppFound = () => {
  return (
    <MyContainer>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <img
          src={NaI}
          alt="No App Found"
          className="max-w-md w-full opacity-90"
        />
        <h2 className="mt-6 text-2xl font-bold text-gray-700">
          No App Found
        </h2>
        <p className="text-gray-500 mt-2 text-center">
          Try searching with a different keyword
        </p>
      </div>
    </MyContainer>
  )
}

export default NoAppFound
