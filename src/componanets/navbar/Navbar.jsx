import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import '../style/navbar.css'

function Navbar() {
  return (
    <div className='nav-bar-header' >
      <FaCircleUser size={30} />
      <IoIosNotifications size={30}/>
    </div>
  )
}

export default Navbar
