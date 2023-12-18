import React from 'react'
import './style/mainBills.css'
import { Outlet } from 'react-router'

function MainBillsPage() {
  return (
    <div className="main-bills">
      <Outlet />
    </div>
  )
}

export default MainBillsPage
