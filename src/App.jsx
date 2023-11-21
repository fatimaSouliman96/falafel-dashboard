import { useState } from 'react'
import Sidebar from "./componanets/SideBar/Sidebar"
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './componanets/NavBar/Navbar'

function App() {

  return (
    <>
     <Sidebar />
     <Navbar />
     <Outlet />
    </>
  )
}

export default App
