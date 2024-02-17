import { useState } from 'react'
import Sidebar from "../../componanets/SideBar/Sidebar"
import { Outlet } from 'react-router'

function Main() {
    const [ style , setStyle ] = useState("style")
  
    const newStyleSec = () =>{
     if(style =="style"){
       setStyle("newStyle")
     }
     else{
       setStyle("style")
     }
     
    }
 
    
   
   return (
     <>
 
      <Sidebar newStyleSec={newStyleSec} />
      <div className={style}>
      <Outlet />
      </div>
      <div className='background' ></div> 
     </>
   )
 }
 

export default Main
