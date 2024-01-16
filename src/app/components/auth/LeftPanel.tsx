import { Card, Typography } from 'antd'
import React from 'react'
import { primaryColor } from '../constant/color'

const LeftPanel = () => {
  return (
    <div className="h-screen w-1/3 relative border-r-4" style={{borderColor:primaryColor}} >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Background image */}
      <div className="h-full w-full bg-[url('/side-bg.jpg')] bg-cover flex items-center justify-center">
        {/* Text */}
        <div className="text-5xl text-white text-center rotate-0" style={{fontSize:'64px'}}>SIGN UP</div>
      </div>
    </div>
  )
}

export default LeftPanel