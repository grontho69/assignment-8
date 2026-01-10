import React from 'react'
import NoAppFound from '../assets/error-404.png'
 import MyContainer from '../Components/MyContainer'
const Errorpage = () => {
  return (
   <MyContainer>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <img
          src={NoAppFound}
          alt="No App Found"
          className="max-w-md w-full opacity-90"
        />
      
      </div>
    </MyContainer>
  )
}

export default Errorpage
