import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from 'react-bootstrap'
import { router } from './Routes.jsx'
import { RouterProvider } from 'react-router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider dir="rtl">
    <RouterProvider router={router} basename="/falafel-project"/>
    </ThemeProvider>
  </React.StrictMode>,
)
