import { useState } from 'react'
import Sidebar from "./componanets/SideBar/Sidebar"
import './App.css'
import { Outlet } from 'react-router'

function App() {
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
     
    </>
  )
}

export default App
