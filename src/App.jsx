import { useState } from 'react'
import Sidebar from "./componanets/SideBar/Sidebar"
import './App.css'
import { Outlet } from 'react-router'
import SignIn from './pages/Profile/pages/SignIn'

function App() {


   
  
  return (
    <>

     <SignIn />
     
    </>
  )
}

export default App
