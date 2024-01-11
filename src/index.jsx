import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes.jsx'
import { RouterProvider } from 'react-router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} basename='/falafel-dashboard'/>

  </React.StrictMode>,
)
