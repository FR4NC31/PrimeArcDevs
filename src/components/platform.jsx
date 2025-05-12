import React from 'react'

//Images
import WebDev from "../assets/images/web-development 1.png"
import MobileDev from "../assets/images/app-development 1.png"
import WebDesign from "../assets/images/web-design 1.png"

function platform() {
  return (
    <div>
      <img src={WebDev}/>
      <img src={MobileDev}/>
      <img src={WebDesign}/>
    </div>
  )
}

export default platform
