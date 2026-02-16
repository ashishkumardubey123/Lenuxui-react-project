import React from 'react'
import "./nav.scss"
import DateTime from './dateTime'

function Nave() {
  return (
   <nav>
    <div className="left">
     
     <div className="linux-icon"><img src="./navbar-icons/linux-icon.png" alt="apple-icon" /></div>
     <div className="nav-item">
        <p>Ashish Dubey</p>
     </div>
     <div className="nav-item">
        <p>File</p>
     </div>
     <div className="nav-item">
        <p>Window</p>
     </div>
     <div className="nav-item">
        <p>Terminal</p>
     </div>

    </div>



    <div className="right">
        <div className="nav-icon">
            <img src="/navbar-icons/wifi.svg" alt="wifi" />
            </div>
   <div className="nav-item">
            <DateTime/> 

     </div>
    </div>

   </nav>
  )
}

export default Nave
