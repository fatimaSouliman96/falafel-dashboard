import React, { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import '../style/navbar.css'
import { useNavigate } from 'react-router'
import { FaUserEdit } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

function Navbar() {
  const navigate = useNavigate()  
  
  const [ styleList , setStyleList ] = useState("dropDownList")

  const showList = () => {

    if (styleList == "showList") {
      setStyleList("dropDownList")
    }
    else {
      setStyleList("showList")
    }
  }
  return (
    <div className='nav-bar-header' >
      <FaCircleUser size={30} onClick={() => showList()} />
      <ul className={styleList}>
        <span><FaCircleUser size={30} />احمد</span>
        <span>ahmad@gmail.com</span>
        <span className='line' ></span>
        <li onClick={() => navigate("/falafel-dashboard/profile")} ><FaUserEdit /> تعديل الحساب</li>
        <li> <IoLogOutOutline />تسجيل خروج</li>
      </ul>

    </div>
  )
}

export default Navbar
